import styled, { css } from "styled-components";

interface IValueProps {
  isGreen?: boolean;
  isRed?: boolean;
}

export const PriceWrap = styled.div`
  display: flex;
  align-content: center;
  /* flex-wrap: nowrap; */
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
  }
`;
export const PriceItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  & + & {
    margin-left: 45px;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    & + & {
      margin-top: 20px;
      margin-left: 0;
    }
  }
`;

export const Value = styled.div<IValueProps>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #172648;
  ${props => {
    if (props.isGreen)
      return css`
        color: green;
      `;
    if (props.isRed)
      return css`
        color: red;
      `;
  }};
`;

export const Label = styled(Value)`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  opacity: 0.7;
`;
