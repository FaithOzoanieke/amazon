import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import ReadMoreReact from 'read-more-react';
import Currency from 'react-currency-formatter';

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

      <Image src={image} height={200} width={200} object-fit='contain' alt='' />

      <h4 className='my-3'>{title}</h4>

      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <BsStarFill className='h-5 text-yellow-500' key={i} />
          ))}
      </div>
      {/* <p className='text-xs my-2 '>{description}</p> */}
      <ReadMoreReact text={description} />

      <div className='mb-5'>
        <Currency quantity={price} currency='GBP' />
      </div>

      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-1'>
          <Image
            className='w-10'
            src='https://links.papareact.com/fdw'
            width={100}
            height={100}
            alt=''
          />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}

      <button className='mt-auto button'>Add to Basket</button>
    </div>
  );
}

export default Products;
