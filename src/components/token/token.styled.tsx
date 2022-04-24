import styled from "styled-components";

export const TokenItem = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  margin-left: 20px;

  color: #172648;
`;

export const Image = styled.img`
  height: 60px;
  width: 60px;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;
