import styled from "styled-components";

export const Wrap = styled.div`
  padding: 30px 15px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
