import styled from "styled-components";
import { typography } from "../../../styles/font.ts";

export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: -7rem;
  padding: 2rem;
  width: 54rem;
  height: 10.5rem;
  border-radius: 0.625rem;

  position: relative;
  z-index: 1;

  background-color: ${(props) => props.theme["base-profile"]};

  p {
    margin-top: 1.25rem;
    ${typography.fonts.titleL}
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const LinkPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
  }
`;

export const LinkPost = styled.div`
  a {
    ${typography.fonts.link}

    color: ${(props) => props.theme.blue};
    text-decoration: none;
  }
`;

export const LinkPostRight = styled(LinkPost)`
  a {
    margin-left: 0.5rem;
  }
`;

export const LinkPostLeft = styled(LinkPost)`
  a {
    margin-right: 0.5rem;
  }
`;

export const PostBatchesContainer = styled.div`
  display: flex;

  margin-top: 1rem;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    color: ${(props) => props.theme["base-label"]};
  }

  span {
    ${typography.fonts.textM};
    color: ${(props) => props.theme["base-span"]};
  }
`;
