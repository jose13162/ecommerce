import { FormEvent, useState } from "react";
import { useStore } from "zustand";
import { Button } from "../Components/Button";
import { Container } from "../Components/Container";
import { Input } from "../Components/Input";
import { darkTheme, lightTheme, styled, theme } from "../stitches.config";
import { themeStore } from "../store/theme";
import { $axios } from "../utils/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { tokenStore } from "../store/token";

interface IForm {
  email: string;
  password: string;
}

const StyledLogin = styled("div", {
  "&.light-theme": {
    background: lightTheme.colors.$bgColor.value,
  },
  "&.dark-theme": {
    background: darkTheme.colors.$bgColorDarkest.value,
  },
});

const Wrapper = styled("div", {
  width: "70%",
  minWidth: "16rem",
  maxWidth: "28rem",
  borderRadius: "1rem",
  padding: "2rem",
  margin: "1rem",
  display: "grid",
  gap: "2rem",
  placeItems: "center",
  placeSelf: "center",
  "&.light-theme": {
    boxShadow: theme.shadows.$bold.value,
    background: lightTheme.colors.$bgColorDarker.value,
    h1: {
      color: lightTheme.colors.$titleColor.value,
    },
  },
  "&.dark-theme": {
    boxShadow: theme.shadows.$bolder.value,
    background: darkTheme.colors.$bgColor.value,
    h1: {
      color: darkTheme.colors.$titleColor.value,
    },
  },
  h1: {
    margin: 0,
  },
});

const Form = styled("form", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "max-content max-content",
  gap: "3rem",
  justifyItems: "center",
});

const Fields = styled("div", {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr",
  gridAutoRows: "max-content",
  gap: "0.5rem",
});

export function Login() {
  const { theme } = useStore(themeStore);
  const { setToken } = useStore(tokenStore);
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
    <StyledLogin className={theme}>
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
        <Wrapper className={theme}>
          <h1>Entre na sua conta</h1>
          <Form className={theme} onSubmit={handleSubmit} autoComplete="off">
            <Fields>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={form.email}
              />
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                onChange={handleChange}
                value={form.password}
              />
            </Fields>

            <Button
              type="submit"
              style={{ width: "100%" }}
              text={isLoading ? "Enviando..." : "Entrar"}
            />
          </Form>
        </Wrapper>
      </Container>
    </StyledLogin>
  );
}
