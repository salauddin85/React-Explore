import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({priceOption}) => {
    // console.log(priceOption);
    const {id, name, price, features} = priceOption;
    return (
        <div>
            <div className=' bg-cyan-500 m-4 p-4 rounded-xl flex flex-col' >
                <h1 className='text-5xl font-bold mb-4 text-center'>{price} <span>/mon</span></h1>
                <h2 className='text-3xl mb-4 text-center p-4'>{name}</h2>
                <div className='mb-4 font-bold p-4   '>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
                </div>
                <button className='bg-cyan-600 w-full p-2  cursor-pointer hover:bg-cyan-800 transform-duration-500 rounded-xl font-bold'>Buy Now</button>
            </div>
            
        </div>
    );
};
PriceOption.propTypes = {
    priceOption: PropTypes.object.isRequired
}
export default PriceOption;