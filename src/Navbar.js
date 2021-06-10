import React from 'react'

export default function Navbar() {
    return (
        <div className="app__navbar">
     
        <input
        className="app__navbar__input"
        type="text"
        placeholder="Type in a city name"
      />
      <button
        className="app__navbar__button"
      >
        Find Weather
      </button>
    </div>
   
    )
}
