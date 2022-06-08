import { EquityCard } from "../components/equity/EquityCard";
import { WeatherCard } from "../components/weather/weather-card";
import { FaHome, FaReact, FaServer } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
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
  const buttonClick = () => {
    console.log("this does nothing");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <div>
          <FaReact
            size={30}
            color="black"
            className="App-logo"
            onClick={buttonClick}
          />
        </div>
        <div className="nav">
          <FaHome
            size={30}
            color="#242424"
            className="nav-item"
            onClick={buttonClick}
          />
          <AiOutlineStock
            size={30}
            color="#242424"
            className="nav-item"
            onClick={buttonClick}
          />
          <FaServer
            size={30}
            color="#242424"
            className="nav-item"
            onClick={buttonClick}
          />
        </div>
        <div>
          <SiTypescript size={30} color="#242424" onClick={buttonClick} />
        </div>
      </div>
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
