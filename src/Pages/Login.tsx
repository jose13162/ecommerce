import { Button } from "../Components/Button";
import { Container } from "../Components/Container";
import { Input } from "../Components/Input";
import "react-toastify/dist/ReactToastify.css";
import * as FormUtils from "../Components/FormUtils";
import { useForm } from "../hooks/useForm";

interface IForm {
  email: string;
  password: string;
}

export function Login() {
  const [form, setForm, handleChange] = useForm<IForm>({
    email: "",
    password: "",
  });

  return (
    <FormUtils.ScreenContainer>
      <Container fullHeight>
        <FormUtils.Container>
          <h1>Entre na sua conta</h1>
          <FormUtils.Base autoComplete="off">
            <FormUtils.Grid>
              <FormUtils.FieldsGrid>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={form.email}
                  required
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  onChange={handleChange}
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
                    to="/forgot-password"
                    text="Esqueceu a senha?"
                  />
                  <FormUtils.Link to="/register" text="Não tem uma conta?" />
                </div>
              </FormUtils.FieldsGrid>

              <Button type="submit" style={{ width: "100%" }} text="Entrar" />
            </FormUtils.Grid>
          </FormUtils.Base>
        </FormUtils.Container>
      </Container>
    </FormUtils.ScreenContainer>
  );
}
