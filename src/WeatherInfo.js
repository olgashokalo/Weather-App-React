import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-3">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="currentIcon"
          />
        </div>
        <div className="col-8">
          <ul>
            <li>
              {" "}
              <h1>{props.data.city}</h1>{" "}
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description} </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)}℃</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
