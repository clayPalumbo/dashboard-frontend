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
          <LineChart />
        </Card>
        <Card size="medium">Crypto</Card>
      </div>
    </div>
  );
};
