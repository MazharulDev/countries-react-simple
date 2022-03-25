import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = (props) => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div className='countries-container'>
            <div className='countries'>

            {
                countries.map(country=><Country key={country.cca3} country={country} addName={props.addName}></Country>)
            }
            </div>
            <div className='count-container'>
                <h4>Select country: {props.name+' '} </h4>
            </div>
            
        </div>
    );
};

export default Countries;