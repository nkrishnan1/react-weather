import React from 'react'
import { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city !== "") setQuery({ q: city });
    };

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setQuery({ lat: position.coords.latitude, lon: position.coords.longitude });
            });
        }
    }

    const handleUnits = (e) => {
        const selected = e.currentTarget.name;
        if (selected !== units) setUnits(selected);
    }

    return (
        <div className='flex flex-col md:flex-row items-center justify-center my-6'>
            <div className='flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-2 mb-2 md:mb-0 w-full md:w-auto'>
                <input type="text" placeholder='Search for places' className="text-sm md:text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-lg" value={city} onChange={(e) => setCity(e.target.value)} />
                <div className='flex flex-row items-center justify-center space-x-2 mt-2 md:mt-0'>
                    <UilSearch size={20} onClick={handleSearch} className='focus:outline-none  transition ease-out hover:scale-125 text-white' />
                    <UilLocationPoint size={20} onClick={handleLocation} className='focus:outline-none transition ease-out hover:scale-125 text-white' />
                </div>
            </div>
            <div className='flex flex-row w-full md:w-auto items-center justify-center space-x-0 md:space-x-2 mt-2 md:mt-0'>
                <button onClick={handleUnits} name="imperial" className={`focus:outline-none transition ease-out hover:scale-125 text-white p-2 rounded `}>°F</button>
                <p className='text-white mx-2'>|</p>
                <button onClick={handleUnits} name="metric" className={`focus:outline-none transition ease-out hover:scale-125 text-white p-2 rounded `}>°C</button>
            </div>
        </div>
    )
}

export default Inputs;