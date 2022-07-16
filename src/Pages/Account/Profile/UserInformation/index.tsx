import { Input } from "../../../../Components/Input";
import { LabeledInput } from "../../../../Components/LabeledInput";
import {
  Avatar,
  Buttons,
  StyledUserInformation,
  Wrapper,
  StyledNavLink,
} from "./styles";

export function UserInformation() {
  return (
    <StyledUserInformation>
      <Avatar src="https://github.com/jose13162.png/" alt="avatar" />
      <Buttons>
        <StyledNavLink to="/account/edit">Editar</StyledNavLink>
        <StyledNavLink to="/forgot-password">Mudar senha</StyledNavLink>
      </Buttons>
      <Wrapper>
        <LabeledInput
          label="Email"
          htmlFor="email"
          value="jose@gmail.com"
          title="jose@gmail.com"
          id="email"
          disabled
        />
        <LabeledInput
          label="Nome"
          htmlFor="name"
          value="José Anselmo Ferreira Matos"
          title="José Anselmo Ferreira Matos"
          id="name"
          disabled
        />
        <LabeledInput
          label="Nome de usuário"
          htmlFor="username"
          value="zezin_627"
          title="zezin_627"
          id="username"
          disabled
        />
      </Wrapper>
    </StyledUserInformation>
  );
}
