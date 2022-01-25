import Header from './components/Header';
import InputArea from './components/InputArea';
import Content from './components/Content';
import { useState } from 'react';
import React from 'react'

function App() {
  
  const [showcard, setShowcard] = useState(false);

  const [weatherData, setWeatherData] = useState({});

  const onSubmitHandler = (e, text) => {
    e.preventDefault();
    fetchWeather(text);
    setShowcard(true);
  };
  

  async function fetchWeather(name) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {/* Header Element */}
      <Header />
      {/* Input Area for City */}
      <InputArea onSubmit={onSubmitHandler} />
      {/* Content */}
      {showcard && <Content data={weatherData} />}
    </>
  );
}

export default App;
