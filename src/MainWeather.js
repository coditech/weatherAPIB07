import React from 'react'

export default function MainWeather() {
    return (
        <div className="app__main__weather">
        <img
          className="app__main__weather__image"
          src="/cloudy.svg"
          alt="storm icon"
        />
        <div className="app__main__weather__description">
          Description
        </div>
        <div className="app__main__weather__Temperature">
          <b>Temperature</b> Min Temp to Max Temp°C
        </div>
        <div className="app__main__weather__details">
          <div className="app__main__weather__details__Humidity">
            <b>Humidity</b> humidity%
          </div>
          <div className="app__main__weather__details__Pressure">
            <b>Pressure</b> pressure
          </div>
        </div>
      </div>

    )
}
