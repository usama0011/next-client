import Image from 'next/image'
import client__logo from '../Images/client.svg'
import { BeakerIcon, HomeIcon, LoginIcon, LogoutIcon, MenuIcon, QuestionMarkCircleIcon, UsersIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { useState } from 'react';

function Header() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };
  
    return (
        <nav className='flex items-center flex-wrap bg-gray-700 px-2 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
          <Image src={client__logo} width={200} height={50} objectFit="contain" className="block  bg-gray-700" />
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex  lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto '>
            <Link className=" " href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded flex text-white  items-center justify-center hover:bg-gray-900 text-sm hover:text-white '>
              <HomeIcon className="h-5 space-x-2 pr-2"/>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex  lg:w-auto w-full px-3 py-2 rounded flex text-white  items-center justify-center hover:bg-gray-900 text-sm hover:text-white'>
              <UsersIcon className="h-5 space-x-2 pr-2"/>
              Teach
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex  lg:w-auto w-full px-3 py-2 rounded flex text-white  items-center justify-center hover:bg-gray-900 text-sm hover:text-white'>
              <QuestionMarkCircleIcon className="h-5 space-x-2 pr-2"/>
               Help
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex  lg:w-auto w-full px-3 py-2 rounded flex text-white  items-center justify-center hover:bg-gray-900 text-sm hover:text-white'>
              <LogoutIcon className="h-5 space-x-2 pr-2"/>
               Login
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex  lg:w-auto  px-3 py-2 rounded flex text-white w-full max-w-[150px] mx-auto items-center justify-center bg-green-500  text-sm hover:text-white'>
             
               Join for Free
              </a>
            </Link>
          </div>
        </div>
      </nav> 
      
    )
}

export default Header




//   <Image src={client__logo} width={200} height={50} objectFit="contain" className="block  bg-gray-700" />


//  <div className="  ">

     
//</div>