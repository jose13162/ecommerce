import { FormEvent, useState } from "react";
import { useStore } from "zustand";
import { Button } from "../../Components/Button";
import { Container } from "../../Components/Container";
import { Input } from "../../Components/Input";
import { themeStore } from "../../store/theme";
import { $axios } from "../../utils/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormUtils } from "../../Components/FormUtils";
import { useForm } from "../../utils/useForm";

interface IForm {
  email: string;
}

export function Register() {
  const { theme } = useStore(themeStore);
  const [form, setForm, handleChange] = useForm<IForm>({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      await $axios.post("/register", {
        email: form.email,
        redirectUrl: "http://localhost:3000/",
      });

      setIsDone(true);
      toast.success("Email enviado!", {
        theme: theme === "dark-theme" ? "dark" : "light",
      });
    } catch (error: any) {
      switch (error.response.status) {
        case 400:
          toast.error("Este email está em uso", {
            theme: theme === "dark-theme" ? "dark" : "light",
          });
          break;
      }
    }

    setForm({
      email: "",
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
        <FormUtils.Wrapper className={theme}>
          <h1>Crie uma conta</h1>
          <FormUtils.Form onSubmit={handleSubmit} autoComplete="off">
            <FormUtils.Grid>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                disabled={isLoading || isDone}
                value={form.email}
                required
              />

              <Button
                type="submit"
                style={{ width: "100%" }}
                disabled={isLoading || isDone}
                text={isDone ? "Enviado" : isLoading ? "Enviando..." : "Enviar"}
              />
            </FormUtils.Grid>
          </FormUtils.Form>
        </FormUtils.Wrapper>
      </Container>
    </FormUtils.ScreenContainer>
  );
}
