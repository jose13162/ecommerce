import { Button } from "../../Components/Button";
import { Container } from "../../Components/Container";
import { useForm } from "../../hooks/useForm";
import * as FormUtils from "../../Components/FormUtils";
import { Input } from "../../Components/Input";

interface IForm {
  email: string;
}

export function Register() {
  const [form, setForm, handleChange] = useForm<IForm>({
    email: "",
  });

  return (
    <FormUtils.ScreenContainer>
      <Container>
        <FormUtils.Container>
          <h1>Crie uma conta</h1>
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
                <FormUtils.Link to="/login">Entre na sua conta</FormUtils.Link>
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
