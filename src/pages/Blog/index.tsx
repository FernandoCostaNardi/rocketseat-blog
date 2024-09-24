import { Profile } from "./profile";
import { Search } from "../../components/Search";
import { CardContainer } from "./style.ts";
import { Card } from "./card";

export function Blog() {
  return (
    <div>
      <Profile />
      <Search />
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </div>
  );
}
