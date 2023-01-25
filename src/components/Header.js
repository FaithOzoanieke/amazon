import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Header() {
  return (
    <header>
      {/* {Top nav} */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 px-4'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            object-fit='contain'
            className='cursor-pointer'
          />
        </div>

        {/* {Search bar} */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
            type='text'
          />
          <BiSearch size={'30px'} className='p-1' />
        </div>
      </div>

    {/* {Right side} */}
<div>
  <div className='text-white'>
    <p>Hello Faith Uju</p>
    <p>Account & Lists</p>

  </div>

  <div>
    <p>Returns</p>
    <p>& Orders</p>
  </div>

  <div>
<AiOutlineShoppingCart/>
  </div>
</div>
      {/* {Bottom nav} */}
      <div></div>
    </header>
  );
}

export default Header;
