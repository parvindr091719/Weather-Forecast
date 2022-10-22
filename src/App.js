import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [location, setLocation] = useState("");//66a0dd12a97e3669fcb02a61341fab18
  const [data, setData] = useState({});//3dd5d6b56b1a4b3b75d8cafd09a9f3b4

  const url = `http://api.weatherstack.com/current?access_key=66a0dd12a97e3669fcb02a61341fab18&query=${location}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <p className="Note">Note: Insecure Content should be "allow", not "block".</p>
          <br/>
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div>
      </div>

      {data?.current?.temperature !== undefined && <>
        <div className='widget'>
          <div className='weatherIcon'>
            <i className="wi wi-day-sunny"></i>
          </div>

          <div className='weatherInfo'>
            <div className='temprature'>
              <span>{data?.current?.temperature}&deg;C</span>
            </div>
            <div className='description'>
              <div className='weatherCond'>{data?.current?.weather_descriptions[0]}</div>
              <div className='place'>{data?.location?.name} , {data?.location?.country}</div>
            </div>
          </div>

          <div className='date'>{new Date().toDateString()}</div>

          <div className='extra-temp'>
            <div className='temp-info-minmax'>
              <div className='two-sided-section'>
                <p><i className={'wi wi-humidity'}></i></p>
                <p className='extra-info-leftside'> {data?.current?.humidity} % <br /> Humidity </p>
              </div>

              <div className='two-sided-section'>
                <p><i className={'wi wi-rain'}></i></p>
                <p className='extra-info-leftside'> {data?.current?.pressure} <br /> Pressure </p>
              </div>

              <div className='two-sided-section'>
                <p><i className={'wi wi-strong-wind'}></i></p>
                <p className='extra-info-leftside'> {data?.current?.wind_speed}<br /> Speed </p>
              </div>
            </div>

          </div>
        </div>
      </>}

    </>
  )
}

export default App;
