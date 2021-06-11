import Navbar from "./Navbar";

import "./App.css";
import FakeWeather from "./fakeWeatherData.json";
import MainWeather from "./MainWeather";
import HourlyWeatherList from "./HourlyWeatherList";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: null, error: false };
  }

  handleCountryChange = async (country) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${country}&cnt=8&appid=ad31fe76ffa44e4d13b1f2ab08969dc8`
      );
      //console.log("response",response);
      const result = await response.json();
      console.log(result);
      if (result.cod == 200) {
        this.setState({ weather: result, error: false });
      } else {
        this.setState({ error: true });
      }
    } catch (err) {
      console.log(err);
      this.setState({ error: true });
    }
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=Beirut&cnt=8&appid=ad31fe76ffa44e4d13b1f2ab08969dc8`
      );
      //console.log("response",response);
      const result = await response.json();
      this.setState({ weather: result });
    } catch (err) {
      console.log(err);
      this.setState({ error: true });
    }
  }
  render() {
    /*  console.log(Math.floor(FakeWeather.list[0].main.temp_min- 273.15)); */

    return (
      <div className="app" /* style={{backgroundColor:"green",color:"blue"}} */>
        <Navbar handleCountryChange={this.handleCountryChange} />
        {this.state.error ? (
          <div>Error</div>
        ) : (
          <main className="app__main">
            {this.state.weather && (
              <>
                <MainWeather
                  minTemp={this.state.weather.list[0].main.temp_min}
                  maxTemp={this.state.weather.list[0].main.temp_max}
                  humidity={this.state.weather.list[0].main.humidity}
                  pressure={this.state.weather.list[0].main.pressure}
                  description={
                    this.state.weather.list[0].weather[0].description
                  }
                />

                <HourlyWeatherList list={this.state.weather.list} />
              </>
            )}
          </main>
        )}
      </div>
    );
  }
}

export default App;
