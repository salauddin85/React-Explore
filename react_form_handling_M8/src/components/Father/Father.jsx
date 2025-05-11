import React from 'react';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';
import { MoneyContext } from '../Grandpa/Grandpa';

const Father = ({ gift }) => {
    // const {money,house,car} = useContext(AssetContext);
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2 className='text-3xl font-bold underline text-amber-600 mb-3 p-4'>Father</h2>
             <h2  className='text-2xl font-bold underline text-amber-600 mb-3 p-4'>Money: {money}</h2>
             <button onClick={() => setMoney(money + 100)}>Add Money</button>
            <div className='flex justify-between rounded-2xl  p-4'>
                <Sister />
                <Myself gift={gift} />
            </div>
           

        </div>
    );
};

export default Father;