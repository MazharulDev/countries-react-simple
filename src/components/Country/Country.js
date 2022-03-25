import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country);
    const {name,flags}=props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>{name.common}</h2>
        </div>
    );
};

export default Country;