import { Address } from "./Adress";
import { StyledProfile } from "./styles";
import { UserInformation } from "./UserInformation";

export function Profile() {
  return (
    <StyledProfile>
      <h2>Minha conta</h2>
      <UserInformation />
      <Address />
    </StyledProfile>
  );
}
