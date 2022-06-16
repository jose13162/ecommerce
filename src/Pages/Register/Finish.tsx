import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useStore } from "zustand";
import { Button } from "../../Components/Button";
import { Container } from "../../Components/Container";
import { FormUtils } from "../../Components/FormUtils";
import { Input } from "../../Components/Input";
import { IKey } from "../../Models/Key";
import { themeStore } from "../../store/theme";
import { $axios } from "../../utils/axios";

interface IForm {
  name: string;
  username: string;
  password: string;
  passwordConfirmation: string;
}

export function FinishRegister() {
  const navigate = useNavigate();
  const { key } = useParams();
  const { theme } = useStore(themeStore);
  const [registerKey, setRegisterKey] = useState<IKey>();
  const [form, setForm] = useState<IForm>({
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

  function handleChange({ currentTarget }: FormEvent<HTMLInputElement>) {
    const value =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;

    setForm({
      ...form,
      [currentTarget.name]: value,
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) return;
    if (!registerKey) return;

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
        <FormUtils.Wrapper className={theme}>
          <h1>Crie uma conta</h1>
          <FormUtils.Grid
            className={theme}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
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
        </FormUtils.Wrapper>
      </Container>
    </FormUtils.Container>
  );
}