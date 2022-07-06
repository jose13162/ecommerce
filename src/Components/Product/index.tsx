import { useStore } from "zustand";
import { darkTheme, lightTheme, styled, theme } from "../../stitches.config";
import { themeStore } from "../../store/theme";
import { Cover } from "./Cover";
import { Details } from "./Details";
import { Price } from "./Price";
import { Title } from "./Title";

const StyledProduct = styled("div", {
  width: "100%",
  height: "12rem",
  textDecoration: "none",
  display: "grid",
  gridTemplateColumns: "12rem 1fr",
  "&.light-theme": {
    boxShadow: theme.shadows.$bold.value,
    color: lightTheme.colors.$textColorDarker.value,
  },
  "&.dark-theme": {
    boxShadow: theme.shadows.$bolder.value,
    color: darkTheme.colors.$textColorDarker.value,
  },
  "@small": {
    height: "10rem",
    gridTemplateColumns: "10rem 1fr",
  },
  "@tiny": {
    height: "8rem",
    gridTemplateColumns: "8rem 1fr",
  },
});

export function Product() {
  const { theme } = useStore(themeStore);

  const formatPrice = (price: number = 0) => {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });

    return formatter.format(price);
  };

  return (
    <StyledProduct className={theme}>
      <Cover src="" alt="product image" />
      <Details>
        <Title>product title</Title>
        <Price>{formatPrice(0)}</Price>
      </Details>
    </StyledProduct>
  );
}
