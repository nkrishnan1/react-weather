import React from 'react'
import { useState } from 'react'
import {UilSearch , UilLocationPoint} from '@iconscout/react-unicons'

function Inputs(setQuery, units, setUnits) {
    const [city, setCity] = useState("");
    const handleSearch = () => {
        if(city !== "") setQuery({q: city});
    };
    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setQuery({lat: position.coords.latitude, lon: position.coords.longitude});
    });
    const handleUnits = (e) => {
        const selected = e.target.name;
        if(selected !== units) setUnits(selected);
    }
    return (
        <div className='flex flex-row items-center justify-center my-6'>
            <div className='flex flex-row items-center justify-center space-x-2'>
                <input type="text" placeholder='Search for places' className='bg-transparent border-b-2 border-white text-white focus:outline-none' value={city} onChange={(e) => setCity(e.target.value)}/>
                <button onClick={handleSearch} className='focus:outline-none'>
                    <UilSearch size={25} className='text-white'/>
                </button>
                <UilLocationPoint size={25} className='text-white' onClick={handleLocation()}/>
            </div>
            <div className='flex flex-row items-center justify-center space-x-2'>
                <button onClick={() => handleUnits()} name="metric" className= "focus:outline-none text-white : text-gray-500">°C</button>
                <button onClick={() => handleUnits()} name="imperial" className= "focus:outline-none 'text-white' : 'text-gray-500">°F</button>
            </div>
        </div>
        
    )
    }
}

export default Inputs;