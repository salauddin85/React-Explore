import React, { useState } from 'react';
import './Country.css';

const Country = ({ country,onVisit,onRemove }) => {
    const { name, flags, population } = country;
    // console.log(onVisit);
    const [visited, setVisited] = useState(false);
    return (
        <div className='country'>
            
            <h3>{country.name.common}</h3>
            <img src={flags.png} alt={`Flag of ${name.common}`} />
            <p>Population: {population}</p>
            <p>Region: {country.region}</p>
            <button onClick={() => setVisited(!visited)}>
                {visited ? 'Visited' : 'Mark as Visited'}
            </button>
            <button className='add-visited-btn' onClick={() => onVisit(country)}>Add to Visited</button>
            <br />
            <button className='remove-visited-btn' onClick={() => onRemove(country)}>Remove from Visited</button>
        </div>
    );
};

export default Country;