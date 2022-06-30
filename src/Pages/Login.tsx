import { FormEvent, useState } from "react";
import { useStore } from "zustand";
import { Button } from "../Components/Button";
import { Container } from "../Components/Container";
import { Input } from "../Components/Input";
import { themeStore } from "../store/theme";
import { $axios } from "../utils/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { tokenStore } from "../store/token";
import * as FormUtils from "../Components/FormUtils";
import { useForm } from "../hooks/useForm";

interface IForm {
  email: string;
  password: string;
}

export function Login() {
  const navigate = useNavigate();
  const { theme } = useStore(themeStore);
  const { setToken } = useStore(tokenStore);
  const [form, setForm, handleChange] = useForm<IForm>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      const { data } = await $axios.post("/auth", form);

      data.token && setToken(data.token);

      navigate("/");
    } catch (error: any) {
      switch (error.response.status) {
        case 404:
          toast.error("Este usuário não existe", {
            theme: theme === "dark-theme" ? "dark" : "light",
          });
          break;

        case 422:
          toast.error("Credenciais inválidas", {
            theme: theme === "dark-theme" ? "dark" : "light",
          });
          break;
      }
    }

    setForm({
      email: "",
      password: "",
    });
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
        <FormUtils.Container>
          <h1>Entre na sua conta</h1>
          <FormUtils.Base onSubmit={handleSubmit} autoComplete="off">
            <FormUtils.Grid>
              <FormUtils.FieldsGrid>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  disabled={isLoading}
                  value={form.email}
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
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "max-content max-content",
                    justifyContent: "space-between",
                  }}
                >
                  <FormUtils.Link
                    href="/forgot-password"
                    text="Esqueceu a senha?"
                  />
                  <FormUtils.Link href="/register" text="Não tem uma conta?" />
                </div>
              </FormUtils.FieldsGrid>

              <Button
                type="submit"
                style={{ width: "100%" }}
                text={isLoading ? "Enviando..." : "Entrar"}
                disabled={isLoading}
              />
            </FormUtils.Grid>
          </FormUtils.Base>
        </FormUtils.Container>
      </Container>
    </FormUtils.ScreenContainer>
  );
}
