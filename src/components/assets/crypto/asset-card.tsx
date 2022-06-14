import { useEffect, useState } from "react";
import { AiOutlineStock } from "react-icons/ai";
import { Equities } from "../../../common/models/shared.model";
import { useGetCrypto } from "../../../hooks/crypto.hook";
import { Card } from "../../common/Card";
import { LineChart } from "../line-chart";
// import { cryptoData } from "../../sampleData/crypto-data"
import "../styles/asset.scss";

interface Percent {
  change: string;
  color: "green" | "red" | "white";
}

interface Asset {
  name: string;
  image: string;
  price: string;
  dailyChange: number[];
  percent: Percent;
}

interface AssetCardInterface {
  equities: Equities[];
  title: string;
  interval: string;
  startTime: number;
}

const initialCryptoData: Asset[] = [
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

export const AssetCard = ({
  equities,
  title,
  interval,
  startTime
}: AssetCardInterface): JSX.Element => {
  const { isLoading, cryptoData, error, execute } = useGetCrypto(equities);
  const [mappedCrytpo, getMappedCrypto] = useState<Asset[]>(initialCryptoData);

  useEffect(() => {
    try {
      execute({interval, startTime});
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
   * Takes crypto data supplied by the crypto hook and structures it into Asset[].
   */
  const mapCrypto = (): void => {
    const mappedData = cryptoData
      .map((data: string, i: number) => {
        const parsedData = JSON.parse(data);
        if (parsedData.data.length) {
          const assetPrice = parsedData.data;
          const percentChange = getPercentChange(
            assetPrice[0].priceUsd,
            assetPrice[assetPrice.length - 1].priceUsd
          );
          const map: Asset = {
            name:
              equities[i].name[0].toUpperCase() +
              equities[i].name.slice(1, equities[i].name.length),
            image: equities[i].image,
            price: Number(assetPrice[0].priceUsd).toFixed(2),
            dailyChange: assetPrice.map((price: any) => price.priceUsd),
            percent: percentChange,
          };
          return map;
        }
      })
      .filter((e: Asset) => e); // removes empty values

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
        <div className="asset-card">
          <div className="asset-title">{title} Loading...</div>
        </div>
      </Card>
    );
  }
  // TODO: change asset into asset
  return (
    <Card size="medium">
      <div className="asset-card">
        <div className="asset-title">{title}</div>
        {mappedCrytpo &&
          mappedCrytpo.map((asset: Asset, i: number) => {
            return (
              <div className="asset-row" key={asset.price + "-" + i}>
                <img src={asset.image} height="35px" />
                <div className="asset-row-overview">
                  <div className="asset-row-currency">{asset.name}</div>
                  <div className="asset-row-price">${asset.price}</div>
                </div>
                <div className="asset-row-line">
                  <LineChart data={asset.dailyChange} />
                  <div
                    className={`asset-row-percent asset-row-percent-${asset.percent?.color}`}
                  >
                    {asset.percent?.change}%
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Card>
  );
};
