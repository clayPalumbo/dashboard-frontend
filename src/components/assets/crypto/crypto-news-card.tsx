import { useEffect } from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { useGetCryptoNews } from "../../../hooks/crypto-news.hook";
import { Card } from "../../common/Card";
import "../styles/asset.scss";

export const CryptoNewsCard = () => {
  const { isLoading, cryptoNewsData, execute } = useGetCryptoNews();

  useEffect(() => {
    try {
      execute();
    } catch (err) {
      console.log(err);
    }
  }, [execute]);

  const routeChange = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <Card size="large">
      <div className="asset-card">
        <div className="asset-title">Latest Articles</div>
        {cryptoNewsData &&
          cryptoNewsData.map((news: any) => {
            return (
              <button
                key={news.id}
                className="asset-row asset-row-news"
                onClick={() => routeChange(news.url)}
              >
                <div className="asset-news-title">{news.title}</div>
                <div className="asset-news-details">
                  <div className="asset-news-source">{news.domain}</div>
                  {news.currencies.map((coin: any) => {
                    return <div className="asset-news-coin">{coin.code}</div>;
                  })}
                  <div className="asset-news-time">{"< 1h"}</div>
                </div>
              </button>
            );
          })}
      </div>
    </Card>
  );
};
