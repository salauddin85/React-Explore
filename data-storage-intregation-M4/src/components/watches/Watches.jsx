import React from 'react';
import Watch from '../watch/Watch';


const Watches = ({ watches }) => {
    // This is a simple functional component for a watch
    // const watches = [
    //     {
    //         "id": 1,
    //         "name": "Rolex",
    //         "price": 10000
    //     },
    //     {
    //         "id": 2,
    //         "name": "Casio",
    //         "price": 5000
    //     },
    //     {
    //         "id": 3,
    //         "name": "Tissot",
    //         "price": 15000
    //     },
    //     {
    //         "id": 4,
    //         "name": "Omega",
    //         "price": 20000
    //     }

    // ];
    
    return (
        <div>
            
            <h1>Watch Component</h1>
            <p>This is a simple watch component.</p>
            {
                watches.map((watch) => {
                    // console.log(watch,"watch");
                    return (
                        <Watch key={watch.id} watch={watch} />
                    
                    
                    );
                    
                    
                })
            }

        </div>
    );
};

export default Watches;