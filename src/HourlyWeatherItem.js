import React from 'react'

export default function HourlyWeatherItem(props) {
    const time = new Date(props.time).getHours();

    return (
        <div className="app__main__weather-list__weather-element">
        <div>{time}:00</div>
        <img src={props.image} alt="weather icon" />
        <div>{Math.floor(props.temp- 273.15)}°C</div>
      </div>
    )
}
