import React from 'react'
import { UilWind } from '@iconscout/react-unicons'
import { UilSun } from '@iconscout/react-unicons'
import { UilSunset } from '@iconscout/react-unicons'
import { UilTemperature } from '@iconscout/react-unicons'
import { UilArrowDown } from '@iconscout/react-unicons'
import { UilArrowUp } from '@iconscout/react-unicons'
import { UilTear } from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrl } from '../services/WeatherService'

function TemperatureDetails({weatherData: {details, icon, temp, feels_like, humidity, speed, sunrise, sunset, temp_min, temp_max, timezone}}) {
  return (
    <div>
      <div className='flex  items-center justify-center py-5 text-xl text-cyan-300'>
        <p className>{details}</p>
      </div>
      <div className='flex  flex-row items-center py-3 justify-between text-white'>
        <img src={iconUrl(icon)} alt="" className='w-15'/>
        <p className='text-5xl font-medium'>{temp.toFixed()}°</p>
        <div className='flex flex-col space-y-2'> 
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature className='mr-2'size={18} />  Feels like: <span className='font-medium ml-1'>{feels_like.toFixed()}°</span> 
            </div>

            <div className='flex font-light text-sm items-center justify-center'>
                <UilTear className='mr-2'size={18} />  Humidity: <span className='font-medium ml-1'>{humidity.toFixed()}%</span> 
            </div>

            <div className='flex font-light text-sm items-center justify-center'>
                <UilWind className='mr-2'size={18} />  Wind: <span className='font-medium ml-1'>{speed.toFixed()}km/h</span> 
            </div>
        </div>
      </div>

      <div className='flex flex-row items-center justify-between text-white space-x-2 text-sm py-3'>
        
            <UilSun/>
              <p className='font-light'>Rise:<span className='font-medium'> {formatToLocalTime(sunrise,timezone,'hh:mma')}</span></p>
              <p className='font-light'>|</p>
            
            <UilSunset  />
              <p className='font-light'>Set: <span className='font-medium'>{formatToLocalTime(sunset,timezone,'hh:mma')}</span></p>
              <p className='font-light'>|</p>

            
            <UilArrowUp/>
              <p className='font-light'> High: <span className='font-medium'>{temp_max.toFixed()}°</span></p>
              <p className='font-light'>|</p>

            <UilArrowDown/>
              <p className='font-light'>Low: <span className='font-medium'>{temp_min.toFixed()}°</span></p>

      </div>
    </div>
  )
}

export default TemperatureDetails