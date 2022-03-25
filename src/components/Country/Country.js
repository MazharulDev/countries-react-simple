import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,flags,capital,population}=props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <p>Capital: {capital}</p>
            <h5>Population: {population}</h5>
            <button>Select Country</button>
        </div>
    );
};

export default Country;