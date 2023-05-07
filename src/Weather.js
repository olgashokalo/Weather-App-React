import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  function showWeather(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "3632a7c9224763143fe6obtb61dff025";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  const [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  let weatherData = {
    city: "London",
    temperature: 10,
    date: "Tuesday,April 18, 16:00",
    description: "Mostly sunny",
    imageUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 6,
    feelsLike: 8,
  };
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
              onChange={updateCity}
            />{" "}
          </div>
          <div className="col-2">
            <input
              type="submit"
              className="btn btn-outline-secondary"
              value="Search"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              className="btn btn-outline-secondary"
              value="Current"
            />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-3">
          <img src={weatherData.imageUrl} alt={weatherData.description} />
        </div>
        <div className="col-7">
          <ul>
            <li>
              <h1>{weatherData.city}</h1>
            </li>
            <li>Last updated: {weatherData.date}</li>
            <li> {weatherData.description}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <span className="actual-temperature"> {weatherData.temperature}</span>
          <span className="units"> ℃</span>
        </div>
        <div className="col-4">
          <ul>
            <li>Feels like:{weatherData.feelsLike}℃</li>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind:{weatherData.wind} km/h</li>
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
}
