import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [result, setResult] = useState(false);
  let [weather, setWeather] = useState({});

  function showTemperature(response) {
    //console.log(response.data);
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "847fb93bdb350f3f8e4c62e543d7f8f1";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="form"> 
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
    </div>
  );

  if (result) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(weather.temperature)}°C</li>
          <li>Description:{weather.description}</li>
          <li>Humidity:{weather.humidity}%</li>
          <li>Wind:{weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt="Weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
