import React from 'react';
import { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    // const {money,house,car} = useContext(AssetContext);
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>

            <h2 className='text-3xl font-bold underline text-amber-600 mb-3 p-4'>Uncle</h2>
            <h2 className='text-2xl font-bold underline text-amber-600 mb-3 p-4'>Money: {money}</h2>
            {/* <h3 className='text-2xl font-bold underline text-amber-600 mb-3 p-4'>Gift: {JSON.stringify({money,house,car})}</h3> */}
            <button onClick={() => setMoney(money + 100)}>Add Money</button>
        </div>
    );
};

export default Uncle;