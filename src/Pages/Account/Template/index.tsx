import { Container } from "../../../Components/Container";
import { Navigation } from "../../../Components/Navigation";
import { Sidebar } from "./Sidebar";
import { Card, StyledTemplate, Wrapper } from "./styles";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export function Template(props: IProps) {
  return (
    <StyledTemplate>
      <Navigation />
      <Container>
        <Wrapper>
          <Sidebar />
          <Card>{props.children}</Card>
        </Wrapper>
      </Container>
    </StyledTemplate>
  );
}
