import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 90rem;
  height: 18.5rem;
  margin: 0 auto;

  background: ${(props) => props.theme["base-profile"]};
`;

export const HeaderLeft = styled.img`
  width: 25.5625rem;
  height: 11.75rem;
  margin-top: 4.375rem;
`;

export const Logo = styled.img`
  margin-top: 4rem;
  margin-bottom: 8.375rem;
`;
