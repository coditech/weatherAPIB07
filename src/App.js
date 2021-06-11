import React from "react";
import Navbar from "./Navbar";
import MainWeather from "./MainWeather";
import HourlyWeatherList from "./HourlyWeatherList";
import "./App.css";
import storm from "./img/weather-icons/storm.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import fog from "./img/weather-icons/fog.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import clear from "./img/weather-icons/clear.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import FakeWeather from "./fakeWeatherData.json";


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

  imagesChecker = id => {
    if (id < 300) {
      return storm;
    } else if (id >= 300 && id <= 499) {
      return drizzle;
    } else if (id >= 500 && id <= 599) {
      return rain;
    } else if (id >= 600 && id <= 699) {
      return snow;
    } else if (id >= 700 && id <= 799) {
      return fog;
    } else if (id === 800) {
      return clear;
    } else if (id === 801) {
      return partlycloudy;
    } else if (id > 801 && id <= 805) {
      return mostlycloudy;
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
                  image={this.imagesChecker(this.state.weather.list[0].weather[0].id)}
                  minTemp={this.state.weather.list[0].main.temp_min}
                  maxTemp={this.state.weather.list[0].main.temp_max}
                  humidity={this.state.weather.list[0].main.humidity}
                  pressure={this.state.weather.list[0].main.pressure}
                  description={
                    this.state.weather.list[0].weather[0].description
                  }
                />

                <HourlyWeatherList list={this.state.weather.list} getImage={this.imagesChecker} />
              </>
            )}
          </main>
        )}
      </div>
    );
  }
}

export default App;
