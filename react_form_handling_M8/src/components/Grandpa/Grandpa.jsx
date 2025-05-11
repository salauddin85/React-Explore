import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import { createContext } from 'react';
import { useContext } from 'react';
export  const AssetContext = createContext('');
export const MoneyContext = createContext(1000);


const Grandpa = () => {
    const gift = {
        money: 10000,
        car: 'BMW',
        house: '2BHK',
    }
    const [money, setMoney] = React.useState(1000);
    return (
        <div>
            <h1>Grandpa</h1>
            <h2>Money: {money}</h2>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value={gift}>
                    <h2 className='text-3xl font-bold underline text-amber-600 mb-3 p-4'>Grandpa</h2>
                    <div className='flex justify-between rounded-2xl  p-4'>
                        <Father gift={gift} />
                        <Uncle  />
                    </div>
                </AssetContext.Provider>
            </MoneyContext.Provider>
            {/* </MoneyContext.Provider> */}
           
        </div>
    );
};

export default Grandpa;