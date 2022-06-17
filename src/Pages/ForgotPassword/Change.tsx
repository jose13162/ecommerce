import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../Components/Button";
import { Container } from "../../Components/Container";
import { FormUtils } from "../../Components/FormUtils";
import { Input } from "../../Components/Input";
import { $axios } from "../../utils/axios";
import { IKey } from "../../Models/Key";
import { useForm } from "../../utils/useForm";
import { toast, ToastContainer } from "react-toastify";
import { useStore } from "zustand";
import { themeStore } from "../../store/theme";

interface IForm {
  password: string;
  passwordConfirmation: string;
}

export function ChangePassword() {
  const { key } = useParams();
  const { theme } = useStore(themeStore);
  const navigate = useNavigate();
  const [forgotPasswordKey, setForgotPasswordKey] = useState<IKey>();
  const [form, setForm, handleChange] = useForm<IForm>({
    password: "",
    passwordConfirmation: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    $axios
      .get(`/forgot-password/${key}`)
      .then(({ data }) => {
        setForgotPasswordKey(data);
      })
      .catch(() => {
        navigate("/forgot-password");
      });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    if (form.password !== form.passwordConfirmation) {
      toast.error("Confirme sua senha novamente...", {
        theme: theme === "dark-theme" ? "dark" : "light",
      });
      setForm({
        ...form,
        passwordConfirmation: "",
      });

      setIsLoading(false);

      return;
    }

    try {
      await $axios.put("/forgot-password", {
        ...form,
        key: forgotPasswordKey!.key,
      });

      navigate("/login");
    } catch (error: any) {
      switch (error.response.status) {
        case 404:
          navigate("/forgot-password");

          break;
        case 422:
          toast.error("Confirme sua senha novamente...", {
            theme: theme === "dark-theme" ? "dark" : "light",
          });
          setForm({
            ...form,
            passwordConfirmation: "",
          });

          break;
        case 400:
          toast.error("Sua nova senha deve ser diferente da anterior...", {
            theme: theme === "dark-theme" ? "dark" : "light",
          });
          setForm({
            password: "",
            passwordConfirmation: "",
          });

          break;
      }
    }

    setIsLoading(false);
  }

  return (
    <FormUtils.Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Container>
        <FormUtils.Wrapper>
          <h1>Mudar senha</h1>
          <FormUtils.Grid onSubmit={handleSubmit} autoComplete="off">
            <FormUtils.FieldsGrid>
              <Input value={forgotPasswordKey?.email || ""} disabled />
              <Input
                placeholder="Nova senha"
                name="password"
                type="password"
                onChange={handleChange}
                value={form.password}
                disabled={isLoading}
                required
              />
              <Input
                placeholder="Confirme a senha"
                name="passwordConfirmation"
                type="password"
                onChange={handleChange}
                value={form.passwordConfirmation}
                disabled={isLoading}
                required
              />
            </FormUtils.FieldsGrid>

            <Button
              type="submit"
              text={isLoading ? "Enviando..." : "Enviar"}
              disabled={isLoading}
              style={{ width: "100%" }}
            />
          </FormUtils.Grid>
        </FormUtils.Wrapper>
      </Container>
    </FormUtils.Container>
  );
}
