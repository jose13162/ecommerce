import { styled } from "../../stitches.config";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const GridLayout = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "max-content max-content",
  gap: "3rem",
  justifyItems: "center",
});

export default function(props: IProps) {
  return <GridLayout>{props.children}</GridLayout>;
}
