import { Cover, Details, Price, StyledProduct, Title } from "./styles";


export function Product() {
  const formatPrice = (price: number = 0) => {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });

    return formatter.format(price);
  };

  return (
    <StyledProduct>
      <Cover src="" alt="product image" />
      <Details>
        <Title>product title</Title>
        <Price>{formatPrice(0)}</Price>
      </Details>
    </StyledProduct>
  );
}
