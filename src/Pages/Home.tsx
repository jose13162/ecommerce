import { useEffect, useState } from "react";
import { useStore } from "zustand";
import { Container } from "../Components/Container";
import { Navigation } from "../Components/Navigation";
import { Product } from "../Components/Product";
import { IProduct } from "../Models/Product";
import { darkTheme, lightTheme, styled } from "../stitches.config";
import { themeStore } from "../store/theme";
import { $axios } from "../utils/axios";

const StyledHome = styled("div", {
  width: "100vw",
  height: "100vh",
  overflowX: "hidden",
  display: "grid",
  gridTemplateRows: "max-content 1fr",
  "&.light-theme": {
    background: lightTheme.colors.$bgColor.value,
  },
  "&.dark-theme": {
    background: darkTheme.colors.$bgColorLighter.value,
  },
  "&::-webkit-scrollbar": {
    width: "0px",
  },
});

const Products = styled("div", {
  padding: "1.5rem",
  overflowY: "scroll",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1.25rem",
  alignContent: "start",
  "&::-webkit-scrollbar": {
    width: "0px",
  },
});

export function Home() {
  const { theme } = useStore(themeStore);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    $axios
      .get("/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <StyledHome className={theme}>
      <Navigation />
      <Container>
        <Products>
          {products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </Products>
      </Container>
    </StyledHome>
  );
}
