import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WeatherCard } from './components/weather/weather-card';

// TODO: Setup Linting
function App() {
  return (
    <div className="App">
      <WeatherCard locationName="Lake Norman" location="28031"></WeatherCard>
    </div>
  );
}

export default App;
