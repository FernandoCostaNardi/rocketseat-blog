import styled from "styled-components";
import { typography } from "../../../styles/font.ts";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin: 0 auto;
  margin-top: -7rem;
  padding: 2rem 2.5rem;
  width: 54rem;
  height: 13.25rem;
  border-radius: 0.625rem;

  position: relative;
  z-index: 1;

  background-color: ${(props) => props.theme["base-profile"]};
`;

export const ProfileTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    ${typography.fonts.textM};
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ProfileLink = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    ${typography.fonts.link};
    color: ${(props) => props.theme.blue};
  }

  svg {
    width: 0.75rem;
    height: 0.75rem;
    color: ${(props) => props.theme.blue};
  }
`;

export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.625rem;
`;

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  p {
    ${typography.fonts.titleL};
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const ProfileBatchesContainer = styled.div`
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
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
