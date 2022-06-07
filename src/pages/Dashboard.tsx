import React from "react";
import { Card } from "../components/common/Card";
import { LineChart } from "../components/equity/LineChart";
import { WeatherCard } from "../components/weather/weather-card";
import "./styles/dashboard.scss";
export const Dashboard = (props: any) => {
  return (
    <div className="dashboard">
      <div className="weather">
        <div className="weather-title">Weather</div>
        <WeatherCard locationName="Lake Norman" location="28031"></WeatherCard>
        <WeatherCard locationName="Lake Wylie" location="29710"></WeatherCard>
      </div>
      <div className="weather">
        <div className="weather-title">Equity</div>
        <Card size="medium">
          <div className="equity-card">
            <div>
              <div className="equity-title">Daily Crypto Trends</div>
              <div className="equity-chart">
                <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022" />
                <div className="equity-chart-overview">
                  <div className="equity-chart-currency">Bitcoin</div>
                  <div className="equity-chart-price">$36,032.35</div>
                </div>
                <div className="equity-chart-line">
                  <LineChart />
                  <div className="equity-chart-percent">+ 6.42%</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card size="medium">Crypto</Card>
      </div>
    </div>
  );
};
