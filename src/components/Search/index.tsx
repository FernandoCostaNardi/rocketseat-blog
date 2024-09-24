import { SearchContainer, SearchData } from "./style.ts";

export function Search() {
  return (
    <SearchContainer>
      <SearchData>
        <p>Publicações</p>
        <span>6 publicações</span>
      </SearchData>
      <input type="text" placeholder="Buscar conteudo" />
    </SearchContainer>
  );
}
