import React from 'react'

export default class Navbar extends React.Component {
  state={
    countryValue:""
  }
  handleInputChange = (e)=>{
    const countryValue = e.target.value;
    this.setState({countryValue})
  }
render(){
    return (
        <div className="app__navbar">
     
        <input
        className="app__navbar__input"
        type="text"
        placeholder="Type in a city name"
        value={this.state.countryValue}
        onChange={this.handleInputChange}
      />
      <button
        className="app__navbar__button"
       onClick={()=>this.props.handleCountryChange(this.state.countryValue)}
      >
        Find Weather
      </button>
    </div>
   
    )
}
}
