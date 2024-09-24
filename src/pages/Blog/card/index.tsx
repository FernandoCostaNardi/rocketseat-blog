import { CardContainer, CardTitleContainer } from "./style.ts";

export function Card() {
  return (
    <CardContainer>
      <CardTitleContainer>
        <p>JavaScript data types and data structures</p>
        <span>Há 1 dia</span>
      </CardTitleContainer>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </CardContainer>
  );
}
