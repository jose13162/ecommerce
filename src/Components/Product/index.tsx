import { useStore } from "zustand";
import { IProduct } from "../../Models/Product";
import { darkTheme, lightTheme, styled, theme } from "../../stitches.config";
import { themeStore } from "../../store/theme";
import { Cover } from "./Cover";
import { Details } from "./Details";
import { Price } from "./Price";
import { Title } from "./Title";

interface IProps {
  product: IProduct;
}

const StyledProduct = styled("a", {
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

export function Product({ product }: IProps) {
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
    <StyledProduct className={theme} href={`/products/${product?.id}`}>
      <Cover src={product?.media[0].url} />
      <Details>
        <Title>{product?.title}</Title>
        <Price>{formatPrice(product?.price)}</Price>
      </Details>
    </StyledProduct>
  );
}
