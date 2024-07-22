import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Weather.css'

const Weather = () => {
  const [data, setData] = useState([])
  /*
Here the useState hook from React library is used to define a new state.
variable location:
This variable represents the current state, which is initially an empty string (“”).
setLocation function:
This function is used to update the location value.
  */
  const [location, setLocation] = useState("")

  useEffect(() => {
    const fetchDefaultLocation = async () => {
      const defaultLocation = 'Riyadh'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=5dc31f1a51a862365906ddd9165235ee`
      const response = await axios.get(url)
      setData(response.data)
    }
    fetchDefaultLocation()
  }, [])

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=5dc31f1a51a862365906ddd9165235ee`
    try {
      const response = await axios.get(url)
      if(response.data.cod !== 200) {
        setData({notFound: true})
      } else {
        setData(response.data)
        setLocation('')
      } 
    } catch (error) {
      if(error.response && error.response.status === 404) {
        setData({notFound: true})
      } else {
        console.error("An unexpected error occurred", error)
      }
    }
  }

  //Code used to update the state of a component in React based on user input, allowing the component to automatically re-render when the value changes
  const handleInutChange = (e) => {
    setLocation(e.target.value)
  }


  const getWeatherIcon = (weatherType) => {
    switch(weatherType) {
      case "Clear":
        return <i className='bx bxs-sun'></i>
      case "Clouds":
        return <i className='bx bxs-cloud'></i>
      case "Rain":
        return <i className='bx bxs-cloud-rain'></i>
      case "Thumderstorm":
        return <i className='bx bxs-cloud-lightning'></i>
      case "Snow":
        return <i className='bx bx-cloud-snow'></i>
      case "Haze":
      case "Wist":
        return  <i className='bx bxs-cloud'></i>
      default:
        return  <i className='bx bxs-cloud'></i>
    }
  }

  return (
   <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-md-3 col-sm-12 ">
      <div className="box-weather ">
      <div className="search">
        <div className="search-top">
        <i className='bx bxs-location-plus'></i>
          <div className="location">{data.name}</div>
        </div>
        <div className="search-location">
          <input type="text" placeholder='Enter Location' value={location} onChange={handleInutChange}/>
          <i className='bx bx-search-alt-2' onClick={search}></i>
        </div>
      </div>
      <div className="weather-data">
        {data.weather && data.weather[0] && getWeatherIcon(data.weather[0].main)}
      <div className="weather-type">{data.weather ? data.weather[0].main : null}</div>
      <div className="temp">{data.main ? `${Math.floor(data.main.temp)}°` : null}</div>
            </div>
    </div>
      </div>
    </div>
   </div>
  )
}

export default Weather
