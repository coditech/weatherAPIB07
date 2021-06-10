import React from 'react'

export default function HourlyWeatherItem() {
    return (
        <div className="app__main__weather-list__weather-element">
        <div>time</div>
        <img src="/cloudy.svg" alt="storm icon" />
        <div>temp°C</div>
      </div>
    )
}
