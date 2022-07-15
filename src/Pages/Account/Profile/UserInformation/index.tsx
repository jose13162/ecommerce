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
      <Wrapper>
        <p>jose@gmail.com</p>
        <p>José Anselmo Ferreira Matos</p>
        <p>zezin_627</p>
        <Buttons>
          <StyledNavLink to="/account/edit">Editar</StyledNavLink>
          <StyledNavLink to="/forgot-password">Mudar senha</StyledNavLink>
        </Buttons>
      </Wrapper>
    </StyledUserInformation>
  );
}
