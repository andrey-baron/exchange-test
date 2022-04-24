import React, { FC } from "react";
import { PriceBlock } from "../price-block/price-block";
import { Token } from "../token/token";
import { Wrap } from "./currency.styled";

import { IToken } from "../../../src/data/Contracts";
interface ICurrencyProps {
  token: IToken;
}

export const Currency: FC<ICurrencyProps> = ({ token }: ICurrencyProps) => {
  return (
    <Wrap>
      <Token token={token} />
      <PriceBlock token={token} />
    </Wrap>
  );
};
