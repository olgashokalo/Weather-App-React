import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>{" "}
          {/* <img src={props.data.condition.icon_url} alt="forecast icon" /> */}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 15℃ </span>
            <span className="WeatherForecast-temperature-min"> 10℃ </span>
          </div>
        </div>
      </div>
    </div>
  );
}
