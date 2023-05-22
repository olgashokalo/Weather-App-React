import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    return Math.round(props.data.temperature.maximum);
  }
  function minTemperature() {
    return Math.round(props.data.temperature.minimum);
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>{" "}
      <img
        src={props.data.condition.icon_url}
        alt="forecast icon"
        className="WeatherForecast-Icon"
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {" "}
          {maxTemperature()}℃ <br />
        </span>
        <span className="WeatherForecast-temperature-min">
          {" "}
          {minTemperature()}℃{" "}
        </span>
      </div>
    </div>
  );
}
