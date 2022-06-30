import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useStore } from "zustand";
import { Button } from "../../Components/Button";
import { Container } from "../../Components/Container";
import * as FormUtils from "../../Components/FormUtils";
import { Input } from "../../Components/Input";
import { IKey } from "../../Models/Key";
import { themeStore } from "../../store/theme";
import { $axios } from "../../utils/axios";
import { useForm } from "../../hooks/useForm";

interface IForm {
  name: string;
  username: string;
  password: string;
  passwordConfirmation: string;
}

export function CreateAccount() {
  const navigate = useNavigate();
  const { key } = useParams();
  const { theme } = useStore(themeStore);
  const [registerKey, setRegisterKey] = useState<IKey>();
  const [form, setForm, handleChange] = useForm<IForm>({
    name: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    $axios
      .get(`/register/${key}`)
      .then(({ data }) => {
        setRegisterKey(data);
      })
      .catch(() => {
        navigate("/register");
      });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) return;
    if (!registerKey) return;

    if (form.password !== form.passwordConfirmation) {
      toast.error("Confirme sua senha novamente...", {
        theme: theme === "dark-theme" ? "dark" : "light",
      });
      setForm({
        ...form,
        passwordConfirmation: "",
      });
    }

    setIsLoading(true);

    try {
      await $axios.put("/register", {
        ...form,
        key: registerKey.key,
      });

      navigate("/login");
    } catch (error: any) {
      switch (error.response.status) {
        case 404:
          navigate("/register");
          break;

        case 422:
          if (
            error.response.data.details[0].message ===
            `"passwordConfirmation" must be [ref:password]`
          ) {
            toast.error("Confirme sua senha novamente...", {
              theme: theme === "dark-theme" ? "dark" : "light",
            });
            setForm({
              ...form,
              passwordConfirmation: "",
            });

            break;
          }

          toast.error("Esse nome de usuário já está em uso", {
            theme: theme === "dark-theme" ? "dark" : "light",
          });
          setForm({
            ...form,
            username: "",
          });
          break;
      }
    }

    setIsLoading(false);
  }

  return (
    <FormUtils.ScreenContainer>
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
      <Container fullHeight>
        <FormUtils.Container className={theme}>
          <h1>Crie uma conta</h1>
          <FormUtils.Base onSubmit={handleSubmit} autoComplete="off">
            <FormUtils.Grid>
              <FormUtils.FieldsGrid>
                <Input type="text" value={registerKey?.email || ""} disabled />
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  onChange={handleChange}
                  disabled={isLoading}
                  value={form.name}
                  required
                />
                <Input
                  type="text"
                  name="username"
                  placeholder="Nome de usuário"
                  onChange={handleChange}
                  disabled={isLoading}
                  value={form.username}
                  required
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  onChange={handleChange}
                  disabled={isLoading}
                  value={form.password}
                  required
                />
                <Input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirme sua senha"
                  onChange={handleChange}
                  disabled={isLoading}
                  value={form.passwordConfirmation}
                  required
                />
              </FormUtils.FieldsGrid>

              <Button
                type="submit"
                style={{ width: "100%" }}
                disabled={isLoading}
                text={isLoading ? "Enviando..." : "Criar conta"}
              />
            </FormUtils.Grid>
          </FormUtils.Base>
        </FormUtils.Container>
      </Container>
    </FormUtils.ScreenContainer>
  );
}
