import styled from "styled-components";

interface DividerProps {
  readonly height?: number;
}
export const Divider = styled.div<DividerProps>`
  height: ${props => props.height ?? 1}px;
  background: #e8edfa;
`;
