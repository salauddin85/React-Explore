import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, Setcountries] = useState([]);
    const [vistedcountries, setVisitedCountries] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => Setcountries(data))
            .catch((error) => console.error('Error fetching countries:', error));
    }   , []);
    // remove country from visited list
    const handleRemoveVisited = (country) => {
        console.log('Remove visited country:', country);
        setVisitedCountries((prevVisited) => prevVisited.filter((visitedCountry) => visitedCountry.cca3 !== country.cca3));
    }
    
    const handleVisited = (country) => {
        console.log('Visited country:', country);
        // Check if the country is already in the visited list
        if (vistedcountries.some((visitedCountry) => visitedCountry.cca3 === country.cca3)) {
            alert('You have already visited this country!');
            return;
        }
        setVisitedCountries((prevVisited) => [...prevVisited, country]); 
    }

    return (
        <div >
            <h1>All Countries : {countries.length}</h1>  
            <h2>Visited Countries : {vistedcountries.length}</h2>
            
            <div className={vistedcountries.length >= 1 ? 'visited-container' : 'visited-container hidden'}>
               {vistedcountries.map((country) => (
                <div key={country.cca3} className='visited-country'>
                    <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                    <p>{country.name.common}</p>
                </div>
               ))}
            </div>

            <div className='country-container'>
                {countries.map((country) => (
                    <Country key={country.cca3} country={country} onVisit={() => handleVisited(country) } onRemove={() => handleRemoveVisited(country)}></Country>
                ))}
            
            </div>
        </div>
    );
};

export default Countries;