import React, { useState } from 'react'
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

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=5dc31f1a51a862365906ddd9165235ee`


    
    //A GET request is sent to the specified URL using the Axios library. The await keyword is used to wait for a request response before continuing.
    /*
    const response = 
await axios.get(url):
This line uses axios to send a GET request to the address specified in the url.
await makes the code wait until a response is received from the server before continuing.

setData(response.data):
After the response is received, the received data (response.data) is set to a state called data using the setData function.

setLocation(''):
A state called location is assigned an empty value using the setLocation function.

console.log(response):
The complete response is printed in the console for the purposes of debugging or verifying the data received
*/
    const response = await axios.get(url)
    //After getting the response, the data is updated using the setData function, which is supposed to update the state of the React component.
    setData(response.data)
    setLocation('')
    console.log(response)
  }

  //Code used to update the state of a component in React based on user input, allowing the component to automatically re-render when the value changes
  const handleInutChange = (e) => {
    setLocation(e.target.value)
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
      <i className='bx bxs-sun'></i>
      <div className="weather-type">{data.weather ? data.weather[0].main : null}</div>
      <div className="temp">28°</div>
            </div>
    </div>
      </div>
    </div>
   </div>
  )
}

export default Weather
