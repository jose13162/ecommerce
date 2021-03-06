import { Button } from "../../Components/Button";
import { Container } from "../../Components/Container";
import * as FormUtils from "../../Components/FormUtils";
import { Input } from "../../Components/Input";
import { useForm } from "../../hooks/useForm";

interface IForm {
  email: string;
}

export function ForgotPassword() {
  const [form, setForm, handleChange] = useForm<IForm>({ email: "" });

  return (
    <FormUtils.ScreenContainer>
      <Container>
        <FormUtils.Container>
          <h1>Recuperar senha</h1>
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
                <FormUtils.Link to="/login">Entrar</FormUtils.Link>
              </FormUtils.FieldsGrid>

              <Button type="submit" style={{ width: "100%" }}>
                Enviar
              </Button>
            </FormUtils.Grid>
          </FormUtils.Base>
        </FormUtils.Container>
      </Container>
    </FormUtils.ScreenContainer>
  );
}
