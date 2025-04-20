import React from 'react';

const Watch = ({ watch }) => {
    const { name, price, id } = watch;
    return (
        <div>
            
            <h1>Watch Component</h1>
            <p>This is a simple watch component.</p>
            <h1>Watch ID: {id}</h1>
            <h2>Watch Name: {name}</h2>
            <h2>Watch Price: {price}</h2>

        </div>
    );
};

export default Watch;