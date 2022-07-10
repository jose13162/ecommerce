import Rating from "./Rating";
import {
  Cover,
  Price,
  StyledProduct,
  Title,
  Category,
  Details,
} from "./styles";

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
      <Cover
        src="https://m.media-amazon.com/images/I/613ZzkRXGyL._AC_SY450_.jpg"
        alt="product image"
      />
      <Details>
        <Category>hardware</Category>
        <Title title="ASUS GEFORCE GTX 1050 TI OVERCLOCKED">
          asus geforce gtx 1050 ti overclocked
        </Title>
        <Price>{formatPrice(1299.9)}</Price>
        <Rating stars={4} />
      </Details>
    </StyledProduct>
  );
}
