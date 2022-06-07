import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { WeatherCard } from "./components/weather/weather-card";
import { Dashboard } from "./pages/Dashboard";

// TODO: Setup Linting
function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
