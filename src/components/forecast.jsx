import React from 'react'
import { iconUrl } from '../services/WeatherService'

function Forecast({ title, items }) {
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='text-2xl text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-wrap justify-between'>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <p className="font-light text-sm text-white">{item.title}</p>
            <img src={iconUrl(item.icon)} className="w-12 my-1" alt="" />
            <p className="font-medium text-white sm:text-xs md:text-sm">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast