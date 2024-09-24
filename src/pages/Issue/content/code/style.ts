import styled from "styled-components";

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  margin: 0 auto;
  width: 50rem;
  padding: 1rem;
  border-radius: 0.125rem;
  margin-top: 1.5rem;

  background: ${(props) => props.theme["base-post"]};
`;
