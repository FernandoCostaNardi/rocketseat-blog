import styled from "styled-components";
import { typography } from "../../../styles/font.ts";

export const CardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 0.625rem;

  background: ${(props) => props.theme["base-post"]};

  p {
    margin-top: 1.25rem;
    max-height: 7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    ${typography.fonts.textM}
    color: ${(props) => props.theme["base-text"]};
  }
  &:hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
  }
`;

export const CardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  p {
    max-width: 17.68rem;

    ${typography.fonts.titleM}
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    ${typography.fonts.textS}
    color: ${(props) => props.theme["base-span"]};
  }
`;
