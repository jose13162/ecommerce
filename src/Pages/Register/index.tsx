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

interface IForm {
  email: string;
}

export function Register() {
  const { theme } = useStore(themeStore);
  const [form, setForm] = useState<IForm>({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

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
        </FormUtils.Wrapper>
      </Container>
    </FormUtils.Container>
  );
}
