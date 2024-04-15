import React, { useEffect, useState } from 'react'

const Forecast = (props) => {
    const [weather,setWeather] = useState({})
    useEffect( ()=>{
        if(props.city){
            async function fetchMyAPI() {
                let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=5336641a65286fc57c9b2a43889bdde4`)
                response = await response.json()
                setWeather(response)
              }
              fetchMyAPI()
        }
        
      },[])
  return (
    <> 
    {weather ? 
    <div className="weather">
            {console.log(weather)}
    <div className="weather-nav">
        <span className='lon-lat'>Lattitude : {weather.coord?.lat}</span>
        <span>{weather.name}({weather.sys?.country}){console.log(weather)}</span>
        <span className='lon-lat'>Longitude : {weather.coord?.lon}</span>
    </div>
    <div className="main">
    
    <h2>Highlights</h2>
    <div>
    <div className="temp-section">
        <div className="current-temp">Temprature : {(weather.main?.temp-273.15).toFixed(2)}&deg;C</div>
        <div className="max-min">
            <span>Max-temprature: {(weather.main?.temp_max-273.15).toFixed(2)}&deg;C</span>
            <span>Min-temprature:{(weather.main?.temp_min-273.15).toFixed(2)}&deg;C</span>
        </div>
    </div>
    <div className="main-forecast">
        
        <div className="feelslike">Feels like : {(weather.main?.feels_like-273).toFixed(2)}&deg;C</div>
        <div className="humidity">Humidity : {weather.main?.humidity}</div>
        <div className="pressure">Pressure : {weather.main?.pressure}</div>
    </div>
    </div>
    </div>
    <div className="additional-info">
    <div className="clouds">
        Cloudness :{weather.clouds?.all}% 
    </div>
    <div className="visibility">
        visibility :{weather.visibility} Meter
    </div>
    </div>
    <div className='wind'>
        <span className="wid-speed">
            Wind-speed : {weather.wind?.speed} m/s
        </span>
        <span className="wind-dir">
            Wind-direction:{weather.wind?.deg} &deg;
        </span>
    </div>
    
    <div className="timings">
        <span>Sunrise-time : {weather.sys?.sunrise} UTC</span>
        <span>Sunset-time : {weather.sys?.sunset} UTC</span>
    </div>

</div>
    : <div>No information available</div>
    }
        
    </>
  )
}

export default Forecast
