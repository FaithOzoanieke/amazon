import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
// import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Products({ id, title, price, description, category, image }) {
  // piece of state which is a short time memory
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>

      <Image src={image} height={200} width={200} object-fit='contain' />

      <h4 className='my-3'>{title}</h4>

      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <BsStarFill key={i} className='h-5 text-yellow-500' />
          ))}
      </div>

      <p className='text-xs my-2 truncate'>{description}</p>

      {/* <div className='mb-5'>
        <Currency quantity={price} currency='GBP' />
      </div> */}

      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12' src='https://links.papareact.com/fdw' alt='' />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}

      <button className='mt-auto button'>Add to Basket</button>
    </div>
  );
}

export default Products;
