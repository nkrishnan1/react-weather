import React from 'react';

const TopButtons = ({setQuery}) => {
    const cities = [
        {
            id: 1,
            name: 'Sydney',
        },
        {
            id: 2,
            name: 'New York',

        },
        {
            id: 3,
            name: 'Tokyo',

        },
        {
            id: 4,
            name: 'Toronto',

        }
    ]
    return (
        <div className='flex items-center justify-around my-6'>
            {cities.map(city => (
                <button
                    key={city.id}
                    className='text-white transition ease-out hover:scale-110 font-medium'
                    style={{ border: 'none' } } onClick={() => setQuery({ q: city.name })}
                >
                    {city.name}
                </button>
            ))}
        </div>
    );
};

export default TopButtons;
