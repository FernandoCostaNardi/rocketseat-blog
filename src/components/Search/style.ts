import styled from "styled-components";
import { typography } from "../../styles/font.ts";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 54rem;
  margin: 0 auto;
  margin-top: 4.375rem;

  input {
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1rem;

    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 0.375rem;

    ${typography.fonts.textM};
    background: ${(props) => props.theme["base-input"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:active,
    &:focus,
    &:not(:placeholder-shown) {
      border: 1px solid ${(props) => props.theme.blue};
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const SearchData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  p {
    ${typography.fonts.titleS};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    ${typography.fonts.textS};
    color: ${(props) => props.theme["base-span"]};
  }
`;
