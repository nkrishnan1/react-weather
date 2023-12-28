import React from 'react'
import { useState } from 'react'
import {UilSearch , UilLocationPoint} from '@iconscout/react-unicons'

function Inputs({setQuery, units, setUnits}) {
    const [city, setCity] = useState("");
    const handleSearch = () => {
        if(city !== "") setQuery({q: city});
    };
    const handleLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
            setQuery({lat: position.coords.latitude, lon: position.coords.longitude});
            }); 
        }
    }
    const handleUnits = (e) => {
        const selected = e.currentTarget.name;
        if(selected !== units) setUnits(selected);
    }
    return (
        <div className='flex flex-row items-center justify-center my-6'>
            <div className='flex flex-row items-center justify-center space-x-2'>
                <input type="text" placeholder='Search for places' className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-lg" value={city} onChange={(e) => setCity(e.target.value)}/>
                    <UilSearch size={25} onClick={handleSearch} className='focus:outline-none  transition ease-out hover:scale-125 text-white'/>

                    <UilLocationPoint size={25} onClick={handleLocation} className='focus:outline-none transition ease-out hover:scale-125 text-white' />
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center space-x-2 '>
               <button onClick={handleUnits} name="metric" className= "focus:outline-none transition ease-out hover:scale-125 text-white">°C</button>
                <p className='text-white'>|</p>
                <button onClick={handleUnits} name="imperial" className= "focus:outline-none transition ease-out hover:scale-125 text-white">°F</button>
            </div>
        </div>
    )
}

export default Inputs;