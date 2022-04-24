import React, { FC, useMemo } from "react";
import { Label, Value, PriceItem, PriceWrap } from "./price-block.styled";

import { IToken } from "../../../src/data/Contracts";

interface IPriceBlockProps {
  token: IToken;
}

export const PriceBlock: FC<IPriceBlockProps> = ({ token }: IPriceBlockProps) => {
  const formatting = (value: number): String => {
    return value < 0 ? `-$${value * -1}` : `$${value}`;
  };

  const price = useMemo(() => {
    return Math.round(token.price * 1e2 + token.change * 1e2) / 1e2;
  }, [token.price, token.change]);
  return (
    <PriceWrap>
      <PriceItem>
        <Label>Price</Label>
        <Value>{formatting(price)}</Value>
      </PriceItem>
      <PriceItem>
        <Label>Change</Label>
        <Value isGreen={token.change > 0} isRed={token.change < 0}>
          {formatting(token.change)}
        </Value>
      </PriceItem>
      <PriceItem>
        <Label>Volume</Label>
        <Value>${token.volume.toLocaleString("en-US")}</Value>
      </PriceItem>
    </PriceWrap>
  );
};
