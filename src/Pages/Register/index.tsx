import { useStore } from "zustand";
import { Button } from "../../Components/Button";
import { Container } from "../../Components/Container";
import { Input } from "../../Components/Input";
import { themeStore } from "../../store/theme";
import { useForm } from "../../hooks/useForm";
import * as FormUtils from "../../Components/FormUtils";

interface IForm {
  email: string;
}

export function Register() {
  const { theme } = useStore(themeStore);
  const [form, setForm, handleChange] = useForm<IForm>({
    email: "",
  });

  return (
    <FormUtils.ScreenContainer>
      <Container fullHeight>
        <FormUtils.Container className={theme}>
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
                <FormUtils.Link to="/login" text="Entre na sua conta" />
              </FormUtils.FieldsGrid>

              <Button type="submit" style={{ width: "100%" }} text="Enviar" />
            </FormUtils.Grid>
          </FormUtils.Base>
        </FormUtils.Container>
      </Container>
    </FormUtils.ScreenContainer>
  );
}
