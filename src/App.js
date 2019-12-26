import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Loading from "./components/Loading";

function App() {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = "5df98c22d8ba6cfe7a4c02805ae4bd02";

  const getWeather = async e => {
    e.preventDefault();
    let city = document.querySelector("#city").value.trim();
    let country = document.querySelector("#country").value.trim();
    setIsLoading(true);
    // imperial
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
    setWeather([data]);
    setIsLoading(false);
    document.querySelector("#city").value = "";
    document.querySelector("#country").value = "";
    document.querySelector("#city").focus();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="">
            <Form getWeather={getWeather} />
          </div>
        </div>

        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="right">
            {isLoading ? <Loading /> : <Weather weather={weather} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
