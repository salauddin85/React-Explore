import React from 'react';

import { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';
const Myself = () => {
    const {money,house,car} = useContext(AssetContext);
    console.log({money,house,car});
    return (
        <div>
            <h2 className='text-3xl font-bold underline text-amber-600 mb-3 p-4'>Myself</h2>
            <h3 className='text-2xl font-bold underline text-amber-600 mb-3 p-4'>Gift: {JSON.stringify({money,house,car})}</h3>
        </div>
    );
};

export default Myself;