import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
    // console.log(props);
  }
  const apiKey = "3632a7c9224763143fe6obtb61dff025";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>{" "}
          {/* <img src={props.data.iconUrl} alt="forecast icon" /> */}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 15℃ </span>
            <span className="WeatherForecast-temperature-min"> 10℃ </span>
          </div>
        </div>
      </div>
    </div>
  );
}
