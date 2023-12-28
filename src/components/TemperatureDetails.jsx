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
      <div className='flex items-center justify-center py-5 text-lg text-cyan-300 font-light'>
        <p className>{details}</p>
      </div>
      <div className='flex flex-col sm:flex-row items-center py-3 justify-between text-white'>
        <img src={iconUrl(icon)} alt="" className='w-12 sm:w-15'/>
        <p className='text-3xl sm:text-4xl font-light'>{temp.toFixed()}°</p>
        <div className='flex flex-col space-y-2'> 
            <div className='flex font-light text-xs sm:text-sm items-center justify-center'>
                <UilTemperature className='mr-2'size={16}/>  Feels like: <span className='font-medium ml-1'>{feels_like.toFixed()}°</span> 
            </div>

            <div className='flex font-light text-sm items-center justify-center'>
                <UilTear className='mr-2'size={18} />  Humidity: <span className='font-medium ml-1'>{humidity.toFixed()}%</span> 
            </div>

            <div className='flex font-light text-sm items-center justify-center'>
                <UilWind className='mr-2'size={18} />  Wind: <span className='font-medium ml-1'>{speed.toFixed()}km/h</span> 
            </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-center text-white space-x-2 text-sm py-3'>
        
        <UilSun/>
        <p className='font-light'>Rise:<span className='font-medium'> {formatToLocalTime(sunrise,timezone,'hh:mma')}</span></p>
        <p className='font-light sm:inline-block hidden'>|</p>
        
        <UilSunset  />
        <p className='font-light'>Set: <span className='font-medium'>{formatToLocalTime(sunset,timezone,'hh:mma')}</span></p>
        <p className='font-light sm:inline-block hidden'>|</p>
    
        
        <UilArrowUp/>
        <p className='font-light'> High: <span className='font-medium'>{temp_max.toFixed()}°</span></p>
        <p className='font-light sm:inline-block hidden'>|</p>
    
        <UilArrowDown/>
        <p className='font-light'>Low: <span className='font-medium'>{temp_min.toFixed()}°</span></p>
    
      </div>
    </div>
  )
}

export default TemperatureDetails