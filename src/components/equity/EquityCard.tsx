import { useEffect, useState } from "react";
import { Equities } from "../../common/models/shared.model";
import { useGetCrypto } from "../../hooks/crypto.hook";
import { Card } from "../common/Card";
import { LineChart } from "./LineChart";
import "./styles/equity.scss";

interface Percent {
  change: string;
  color: "green" | "red" | "white";
}

interface Equity {
  name: string;
  image: string;
  price: string;
  dailyChange: number[];
  percent: Percent;
}

interface EquityCardInterface {
  equities: Equities[];
  title: string;
}

const initialCryptoData: Equity[] = [
  {
    name: "",
    image: "",
    price: "0",
    dailyChange: [],
    percent: {
      change: "0",
      color: "white",
    },
  },
];

export const EquityCard = ({ equities, title }: EquityCardInterface) => {
  const { isLoading, cryptoData, error, execute } = useGetCrypto(equities);
  const [mappedCrytpo, getMappedCrypto] = useState<Equity[]>(initialCryptoData);

  useEffect(() => {
    try {
      execute();
    } catch (err) {
      console.log(err);
    }
  }, [execute]);

  useEffect(() => {
    if (cryptoData) {
      mapCrypto();
    }
  }, [cryptoData]);

  /**
   * Takes crypto data supplied by the crypto hook and structures it into Equity[].
   */
  const mapCrypto = (): void => {
    const mappedData = cryptoData
      .map((data: string, i: number) => {
        const parsedData = JSON.parse(data);
        if (parsedData.data.length) {
          const equityPrice = parsedData.data;
          const percentChange = getPercentChange(
            equityPrice[0].priceUsd,
            equityPrice[equityPrice.length - 1].priceUsd
          );
          const map: Equity = {
            name: equities[i].name,
            image: equities[i].image,
            price: Number(equityPrice[0].priceUsd).toFixed(2),
            dailyChange: equityPrice.map((price: any) => price.priceUsd),
            percent: percentChange,
          };
          return map;
        }
      })
      .filter((e: Equity) => e); // removes empty values

    getMappedCrypto(mappedData);
  };

  const getPercentChange = (start: number, end: number): Percent => {
    const percentage = Number(((end / start - 1) * 100).toFixed(2));
    const isPositive = percentage > 0;
    const symbol = isPositive ? "+" : "-";
    const color = isPositive ? "green" : "red";
    return {
      change: symbol + " " + Math.abs(percentage),
      color,
    };
  };

  if (isLoading) {
    return (
      <Card size="medium">
        <div className="equity-card">
          <div className="equity-title">{title} Loading...</div>
        </div>
      </Card>
    );
  }
  return (
    <Card size="medium">
      <div className="equity-card">
        <div className="equity-title">{title}</div>
        {mappedCrytpo &&
          mappedCrytpo.map((equity: Equity) => {
            return (
              <div className="equity-chart">
                <img src={equity.image} height="35px" />
                <div className="equity-chart-overview">
                  <div className="equity-chart-currency">{equity.name}</div>
                  <div className="equity-chart-price">${equity.price}</div>
                </div>
                <div className="equity-chart-line">
                  <LineChart data={equity.dailyChange} />
                  <div
                    className={`equity-chart-percent equity-chart-percent-${equity.percent?.color}`}
                  >
                    {equity.percent?.change}%
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Card>
  );
};
