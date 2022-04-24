import React, { FC } from "react";
import { TokenItem, Title, Image } from "./token.styled";
import { IToken } from "../../../src/data/Contracts";
interface ITokenProps {
  token: IToken;
}
export const Token: FC<ITokenProps> = ({ token }) => {
  return (
    <TokenItem>
      <Image src={token.img} alt="" />
      <Title>{token.title.toUpperCase()}</Title>
    </TokenItem>
  );
};
