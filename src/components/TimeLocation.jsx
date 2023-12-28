import React from 'react'
import { formatToLocalTime } from '../services/WeatherService'

// function Timelocation({weatherData: {dt,timezone,name,country}}) {
//     return (
//         <div className='flex flex-col sm:flex-row items-center justify-between my-6'>
//           <p className='text-xl sm:text-2xl text-white font-medium uppercase sm:mb-0 mb-2'>{`${name}, ${country}`}</p>
//           <p className='text-sm sm:text-xl text-white font-light'>{formatToLocalTime(dt,timezone)}</p>
//         </div>
//       )
// }
function Timelocation({weatherData: {dt,timezone,name,country}}) {
    return (
      <div>
          <div className='flex items-center justify-center'>
             <p className='text-sm sm:text-xl font-extralight text-white'>{formatToLocalTime(dt,timezone)}</p>
          </div>
          <div className='flex items-center justify-center my-4'>
              <p className='text-xl sm:text-3xl text-white font-medium'>{`${name}, ${country}`}</p>
          </div>
      </div>
    )
}

export default Timelocation;