import { useStore } from "zustand";
import { Button } from "../Components/Button";
import { Container } from "../Components/Container";
import { Input } from "../Components/Input";
import { darkTheme, lightTheme, styled, theme } from "../stitches.config";
import { themeStore } from "../store/theme";

const StyledLogin = styled("div", {
  "&.light-theme": {
    background: lightTheme.colors.$bgColor.value,
  },
  "&.dark-theme": {
    background: darkTheme.colors.$bgColorDarkest.value,
  },
});

const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
});

const Form = styled("form", {
  width: "70%",
  minWidth: "16rem",
  maxWidth: "28rem",
  borderRadius: "1rem",
  padding: "2rem",
  margin: "1rem",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "max-content max-content",
  gap: "3rem",
  justifyItems: "center",
  "&.light-theme": {
    boxShadow: theme.shadows.$bold.value,
    background: lightTheme.colors.$bgColorDarker.value,
  },
  "&.dark-theme": {
    boxShadow: theme.shadows.$bolder.value,
    background: darkTheme.colors.$bgColor.value,
  },
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

  return (
    <StyledLogin className={theme}>
      <Container>
        <Wrapper>
          <Form className={theme} autoComplete="off">
            <Fields>
              <Input type="email" name="email" placeholder="Email" />
              <Input type="password" name="password" placeholder="Senha" />
            </Fields>

            <Button type="submit" style={{ width: "100%" }} text="Entrar" />
          </Form>
        </Wrapper>
      </Container>
    </StyledLogin>
  );
}
