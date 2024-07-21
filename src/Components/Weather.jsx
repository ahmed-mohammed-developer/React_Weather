import React from 'react'
import './Weather.css'

const Weather = () => {
  return (
   <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-md-3 col-sm-12 ">
      <div className="box-weather ">
      <div className="search">
        <div className="search-top">
        <i className='bx bxs-location-plus'></i>
          <div className="location">Abha</div>
        </div>
        <div className="search-location">
          <input type="text" placeholder='Enter Location' />
          <i className='bx bx-search-alt-2'></i>
        </div>
      </div>
      <div className="weather-data">
      <i className='bx bxs-sun'></i>
      <div className="weather-type">clear</div>
      <div className="temp">28°</div>
            </div>
    </div>
      </div>
    </div>
   </div>
  )
}

export default Weather
