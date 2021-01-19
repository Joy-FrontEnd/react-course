import React from "react";
import Weather from './Weather'
import "./style.css";
import Loader from 'react-loader-spinner'

export default function App() {
  return (
    <div className="app-wrapper">
      <h1>Weather App</h1>
      <Weather />
      
      <Loader
         type="Bars"
         color="#00BFFF"
         height={100}
         width={100}
         
 />
      <small>
        <a
          href="https://github.com/Joy-FrontEnd/react-course"
          target="_blank"
          rel="noreferrer noopener"
        >
          Open-source code
        </a>
        by Joy Muthoni
      </small>
    </div>
  );
}
