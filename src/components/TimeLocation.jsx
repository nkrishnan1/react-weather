import React from 'react'
import { formatToLocalTime } from '../services/WeatherService'

function Timelocation({weatherData: {dt,timezone,name,country}}) {
  return (
    <div>
        <div className='flex  items-center justify-center'>
           <p className='font-extralight text-xl text-white'>{formatToLocalTime(dt,timezone)}</p>
        </div>
        <div className='flex  items-center justify-center my-4'>
            <p className='text-3xl text-white font-medium'>{`${name}, ${country}`}</p>
        </div>
    </div>
  )
}

export default Timelocation;