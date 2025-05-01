import React, { useEffect, useState } from 'react';
import PriceOption from '../PriceOption/PriceOption';
const PriceOptions = () => {
  const [priceOption, setpriceOption] = useState([]);

  useEffect(() => {
    fetch('priceOptions.json')
      .then(res => res.json())
      .then(data => setpriceOption(data));
  }, []);

  return (
    <div>
      <div className='grid md:grid-cols-3 gap-4'>
        {priceOption.map((priceOption) => (
          <PriceOption key={priceOption.id} priceOption={priceOption}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
