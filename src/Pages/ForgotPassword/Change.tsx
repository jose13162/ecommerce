import { Button } from "../../Components/Button";
import { Container } from "../../Components/Container";
import { useForm } from "../../hooks/useForm";
import * as FormUtils from "../../Components/FormUtils";
import { Input } from "../../Components/Input";

interface IForm {
  password: string;
  passwordConfirmation: string;
}

export function ChangePassword() {
  const [form, setForm, handleChange] = useForm<IForm>({
    password: "",
    passwordConfirmation: "",
  });

  return (
    <FormUtils.ScreenContainer>
      <Container>
        <FormUtils.Container>
          <h1>Mudar senha</h1>
          <FormUtils.Base autoComplete="off">
            <FormUtils.Grid>
              <FormUtils.FieldsGrid>
                <Input value="email@gmail.com" disabled />
                <Input
                  placeholder="Nova senha"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={form.password}
                  required
                />
                <Input
                  placeholder="Confirme a senha"
                  name="passwordConfirmation"
                  type="password"
                  onChange={handleChange}
                  value={form.passwordConfirmation}
                  required
                />
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
