import React, { useEffect, useState } from "react";
import { Currency } from "./components/currency/currency";
import { Card } from "./styles/components/card";
import { Divider } from "./styles/components/divider";
import { Heading } from "./styles/components/heeading";
import { Layout } from "./styles/components/layout";
import GlobalStyles from "./styles/global";

import { IToken } from "../src/data/Contracts";

const generateMockPrice = () => {
  const isNegative = Math.round(Math.random() * 1e2) / 10 < 5;
  return {
    volume: Math.round(Math.random() * 1e8),
    price: Math.round(Math.random() * 1e4) / 1e2,
    change: (Math.round(Math.random() * 1e6) / 1e5) * (isNegative ? -1 : 1),
  };
};

function App() {
  const initMocks: Array<IToken> = [
    {
      id: 1,
      title: "Nominex",
      img: `${process.env.PUBLIC_URL}/nmx.svg`,
      ...generateMockPrice(),
    },
    {
      id: 2,
      title: "Cake",
      img: `${process.env.PUBLIC_URL}/cake.svg`,
      ...generateMockPrice(),
    },
    {
      id: 3,
      title: "Bsw",
      img: `${process.env.PUBLIC_URL}/bsw.svg`,
      ...generateMockPrice(),
    },
  ];
  const [tokens, setTokens] = useState<Array<IToken>>(initMocks);

  useEffect(() => {
    // эмуляция API
    setInterval(() => {
      setTokens(oldTokens =>
        oldTokens.map(token => {
          const prices = generateMockPrice();
          return {
            ...token,
            change: prices.change,
            price: prices.price,
            volume: Math.max(prices.volume, token.volume),
          };
        })
      );
    }, 1000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Card>
          <Heading>Token statistics</Heading>
          {tokens.map((token, index) => (
            <div key={token.id}>
              <Currency token={token} />
              {tokens.length - 1 !== index ? <Divider /> : ""}
            </div>
          ))}
        </Card>
      </Layout>
    </>
  );
}

export default App;
