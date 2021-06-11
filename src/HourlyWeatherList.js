import React from 'react'
import HourlyWeatherItem from './HourlyWeatherItem'

export default function HourlyWeatherList(props) {
    //console.log(props)
    return (
        <div className="app__main__weather-list">
        {props.list.map((item,index)=>{
                if(index>0 && index< 8)
                return <HourlyWeatherItem time={item.dt_txt} temp={item.main.temp} key={index} image={props.getImage(item.weather[0].id)}/>
        }
                )}
      
           
      </div>

    )
}
