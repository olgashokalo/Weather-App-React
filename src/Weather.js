import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});

  const [city, setCity] = useState(props.defaultCity);

  const [ready, setReady] = useState(false);
  function showWeather(response) {
    setWeatherData({
      coordinates: response.data.coordinates,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
    setReady(true);
  }
  function search() {
    const apiKey = "3632a7c9224763143fe6obtb61dff025";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchLocalPosition(position) {
    let apiKey = "3632a7c9224763143fe6obtb61dff025";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${position.coords.longitude}&lat=${position.coords.latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    console.log(position);
  }

  function geoLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocalPosition);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form className="mb-5" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                className="city form-control"
                type="search"
                placeholder="Enter the city..."
                autoFocus
                onChange={handleCityChange}
              />{" "}
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-outline-secondary ms-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <button
                type="submit"
                className="btn btn-outline-secondary ms-2"
                onClick={geoLocation}
              >
                <FontAwesomeIcon icon={faLocationDot} />
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
