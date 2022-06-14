import { CryptoNewsCard } from "../components/assets/crypto/crypto-news-card";
import { AssetCard } from "../components/assets/crypto/asset-card";
import { SideBar } from "../components/sidebar/sidebar";
import { WeatherCard } from "../components/weather/weather-card";
import "./styles/dashboard.scss";
export const Dashboard = (props: any) => {
  const equities = [
    {
      name: "bitcoin",
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022",
    },
    {
      name: "ethereum",
      image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022",
    },
    {
      name: "cardano",
      image: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=022",
    },
    {
      name: "celo",
      image: "https://cryptologos.cc/logos/celo-celo-logo.png?v=022",
    },
    {
      name: "solana",
      image: "https://cryptologos.cc/logos/solana-sol-logo.png?v=022",
    },
  ];

  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboard-container">
          <div className="dashboard-row">
        <div className="grid">
          <div className="grid-title">Weather</div>
          <WeatherCard
            locationName="Lake Norman"
            location="28031"
          ></WeatherCard>
          <WeatherCard locationName="Lake Wylie" location="29710"></WeatherCard>
        </div>
        <div className="grid">
          <div className="grid-title">Assets</div>
          <div className="grid-row">
            <AssetCard equities={equities} title="Daily Crypto Trends" interval="h2" startTime={12} />
            <AssetCard equities={equities} title="Weekly Crypto Trends" interval="d1" startTime={168} />
            </div>
        </div>
        <div className="grid">
          <div className="grid-title">Crypto News</div>
          <CryptoNewsCard />
        </div>
        </div>
      </div>
    </div>
  );
};
