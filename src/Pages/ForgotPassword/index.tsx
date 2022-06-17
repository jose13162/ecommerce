import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useStore } from "zustand";
import { Button } from "../../Components/Button";
import { Container } from "../../Components/Container";
import { FormUtils } from "../../Components/FormUtils";
import { Input } from "../../Components/Input";
import { themeStore } from "../../store/theme";
import { $axios } from "../../utils/axios";
import { useForm } from "../../utils/useForm";

interface IForm {
  email: string;
}

export function ForgotPassword() {
  const { theme } = useStore(themeStore);
  const [form, setForm, handleChange] = useForm<IForm>({ email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      await $axios.post("/forgot-password", {
        ...form,
        redirectUrl: "http://localhost:3000/",
      });

      toast.success("Email enviado!", {
        theme: theme === "dark-theme" ? "dark" : "light",
      });

      setForm({
        email: "",
      });
      setIsDone(true);
    } catch (error: any) {
      if (error.response.status === 404) {
        toast.error("Esse email não existe", {
          theme: theme === "dark-theme" ? "dark" : "light",
        });
        setForm({
          email: "",
        });
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
          <h1>Recuperar senha</h1>

          <FormUtils.Grid onSubmit={handleSubmit} autoComplete="off">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
              disabled={isLoading || isDone}
              required
            />

            <Button
              type="submit"
              text={isLoading ? "Enviando..." : isDone ? "Enviado" : "Enviar"}
              disabled={isLoading || isDone}
              style={{ width: "100%" }}
            />
          </FormUtils.Grid>
        </FormUtils.Wrapper>
      </Container>
    </FormUtils.Container>
  );
}
