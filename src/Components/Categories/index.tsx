import { BaseHTMLAttributes } from "react";
import { Category } from "./Category";
import { CategoriesList, StyledCategories } from "./styles";

export function Categories(props: BaseHTMLAttributes<HTMLElement>) {
  return (
    <StyledCategories {...props}>
      <CategoriesList>
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
        <Category to="/" category="hardware" />
      </CategoriesList>
    </StyledCategories>
  );
}
