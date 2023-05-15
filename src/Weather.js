import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
  function showWeather(response) {
    console.log(response);
    setWeatherData({
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

  if (ready) {
    return (
      <div className="Weather">
        <form className="mb-5">
          <div className="row">
            <div className="col-6">
              <input
                className="city form-control"
                type="search"
                placeholder="Enter the city..."
                autoFocus
                // onChange={updateCity}
              />{" "}
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn btn-outline-secondary w-100 "
                value="Search"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn btn-outline-secondary w-100 "
                value="Current"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-3">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
          </div>
          <div className="col-7">
            <ul>
              <li>
                {" "}
                <h1>{weatherData.city}</h1>{" "}
              </li>
              <li>
                Last updated:
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description} </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <span className="actual-temperature">
              {" "}
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units"> ℃</span>
          </div>
          <div className="col-4">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLike)}℃</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
        <div className="forecast">
          <div className="row">
            <div className="col-2">
              <ul>
                <li>Mon</li>
                <li>Sunny</li>
                <li>10℃/15℃</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>Tue</li>
                <li>Sunny</li>
                <li>10℃/15℃</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>Wed</li>
                <li>Sunny</li>
                <li>10℃/15℃</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>Thu</li>
                <li>Sunny</li>
                <li>10℃/15℃</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>Fri</li>
                <li>Sunny</li>
                <li>10℃/15℃</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3632a7c9224763143fe6obtb61dff025";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }
}

// function handleSubmit(event) {
//   event.preventDefault();
// }

// const [city, setCity] = useState("");

// function updateCity(event) {
//   setCity(event.target.value);
// }
