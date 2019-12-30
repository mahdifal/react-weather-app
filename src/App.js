import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Loading from "./components/Loading";

function App() {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const getWeather = async e => {
    e.preventDefault();
    if (validationForm() === true) {
      let city = document.querySelector("#city").value.trim();
      let country = document.querySelector("#country").value.trim();
      setIsLoading(true);
      // imperial

      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
      );
      const data = await api_call.json();
      setWeather([data]);
      setIsLoading(false);
      document.querySelector("#city").value = "";
      document.querySelector("#country").value = "";
      document.querySelector("#city").focus();
    }
  };

  const validationForm = e => {
    let city = document.querySelector("#city").value.trim();
    let country = document.querySelector("#country").value.trim();
    if (city === "") {
      let alert = document.querySelector(".my-alert");
      alert.style.display = "block";
      setTimeout(() => {
        alert.style.display = "none";
      }, 5000);
      return false;
    }
    if (country === "") {
      let alert = document.querySelector(".my-alert");
      alert.style.display = "block";
      setTimeout(() => {
        alert.style.display = "none";
      }, 5000);
      return false;
    }
    return true;
  };

  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-md">
          <div className="left">
            <Form getWeather={getWeather} />
          </div>
        </div>

        <div className="col-md">
          <div className="right">
            {isLoading ? <Loading /> : <Weather weather={weather} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
