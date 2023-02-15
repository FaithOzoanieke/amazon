import Image from 'next/image';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    // Push item to redux
    dispatch(addToBasket(product))
  };

  const removeItemFromBasket = () => {
    // Remove item from redux
    dispatch(removeFromBasket({ id }))
  };
  return (
    <div className='grid grid-cols-5'>
      <Image src={image} height={150} width={150} object-fit='contain' />

      {/* Middle section */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <BsStarFill key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <p>${price}</p>
        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <Image
              loading='lazy'
              className='w-12'
              src={'https://links.papareact.com/fdw'}
              alt=''
              width={'20'}
              height={'20'}
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Righ add/remove buttons */}
      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button' onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className='button' onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
