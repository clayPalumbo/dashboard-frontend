import React from "react";
import { Card } from "../components/common/Card";
import { EquityCard } from "../components/equity/EquityCard";
import { WeatherCard } from "../components/weather/weather-card";
import "./styles/dashboard.scss";
export const Dashboard = (props: any) => {
  const cryptos = [0, 20, 20, 60, 40];
  const cryptos2 = [0, 20, 20, 60, 40].reverse();
  const equities = [
    {
      name: "bitcoin",
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022",
    },
    {
      name: "ethereum",
      image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="weather">
          <div className="weather-title">Weather</div>
          <WeatherCard
            locationName="Lake Norman"
            location="28031"
          ></WeatherCard>
          <WeatherCard locationName="Lake Wylie" location="29710"></WeatherCard>
        </div>
        <div className="weather">
          <div className="weather-title">Equity</div>
          <EquityCard equities={equities} title="Daily Crypto Trends" />
          {/* <EquityCard equities={equities} title="Daily Stock Trends" /> */}
        </div>
      </div>
    </div>
  );
};
