import Navbar from "./Navbar";

import './App.css';
import FakeWeather from "./fakeWeatherData.json";
import MainWeather from "./MainWeather";
import HourlyWeatherList from "./HourlyWeatherList";
import React from "react";

class App extends React.Component {
  state={
    weather:{}
  }
 componentDidMount(){
   this.setState({weather:FakeWeather})
 }
render(){
 /*  console.log(Math.floor(FakeWeather.list[0].main.temp_min- 273.15)); */
  return (
    <div className="app" /* style={{backgroundColor:"green",color:"blue"}} */>
   <Navbar/>
 
    <main className="app__main">
     <MainWeather/>
     <HourlyWeatherList/>
          </main>
  </div>
  );
}
}

export default App;
