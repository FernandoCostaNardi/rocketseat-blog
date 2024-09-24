import { HeaderContainer, HeaderLeft, Logo } from "./style";

import logo from "../../assets/logo.svg";
import headerLeft from "../../assets/effect-left.svg";
import headerRight from "../../assets/effect-right.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft src={headerLeft} alt="Logo" />
      <Logo src={logo} alt="Logo" />
      <img src={headerRight} alt="Logo" />
    </HeaderContainer>
  );
}
