import React from 'react'

export default function MainWeather(props) {
  //console.log("main",props);
    return (
        <div className="app__main__weather">
        <img
          className="app__main__weather__image"
          src="/cloudy.svg"
          alt="storm icon"
        />
        <div className="app__main__weather__description">
          {props.description}
        </div>
        <div className="app__main__weather__Temperature">
          <b>Temperature</b> {Math.floor(props.minTemp- 273.15)}°C to {Math.floor(props.maxTemp- 273.15)}°C
        </div>
        <div className="app__main__weather__details">
          <div className="app__main__weather__details__Humidity">
            <b>Humidity</b> {props.humidity}%
          </div>
          <div className="app__main__weather__details__Pressure">
            <b>Pressure</b> {props.pressure}
          </div>
        </div>
      </div>

    )
}
