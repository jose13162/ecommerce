import { Button } from "../../Components/Button";
import { Container } from "../../Components/Container";
import { useForm } from "../../hooks/useForm";
import * as FormUtils from "../../Components/FormUtils";
import { Input } from "../../Components/Input";

interface IForm {
  name: string;
  username: string;
  password: string;
  passwordConfirmation: string;
}

export function CreateAccount() {
  const [form, setForm, handleChange] = useForm<IForm>({
    name: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  return (
    <FormUtils.ScreenContainer>
      <Container>
        <FormUtils.Container>
          <h1>Crie uma conta</h1>
          <FormUtils.Base autoComplete="off">
            <FormUtils.Grid>
              <FormUtils.FieldsGrid>
                <Input type="text" value="email@gmail.com" disabled />
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  onChange={handleChange}
                  value={form.name}
                  required
                />
                <Input
                  type="text"
                  name="username"
                  placeholder="Nome de usuário"
                  onChange={handleChange}
                  value={form.username}
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
                <Input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirme sua senha"
                  onChange={handleChange}
                  value={form.passwordConfirmation}
                  required
                />
              </FormUtils.FieldsGrid>

              <Button type="submit" style={{ width: "100%" }}>
                Criar conta
              </Button>
            </FormUtils.Grid>
          </FormUtils.Base>
        </FormUtils.Container>
      </Container>
    </FormUtils.ScreenContainer>
  );
}
