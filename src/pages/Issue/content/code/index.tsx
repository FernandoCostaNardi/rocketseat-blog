import { CodeContainer } from "./style.ts";

export function Code() {
  return (
    <CodeContainer>
      <span>let foo = 42;</span>
      <span>foo = ‘bar’; </span>
      <span>foo = true;</span>
    </CodeContainer>
  );
}
