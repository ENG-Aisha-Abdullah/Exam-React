import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router';
function Nav() {
  return (
    <div className=''>
    <div className='h-15 bg-gray-900 flex items-center w-full sm:px-5 '>
<div className='w-full flex sm:gap-5 items-center justify-between'>
    <div>
        <Link
        to = "/"
        ><img 
    className='sm:w-20 w-15'
    src="/AmazonLogo.png" alt="" /></Link>
    
  </div>
  <div>
      <input 
      placeholder='Search Amazon'
  className='md:min-w-md p-1 bg-white rounded shadow'
  type="text" />
  </div>
   <div>
    <Link
    to = "/logIn"
    ><button
    className='text-white hover:underline text-base sm:text-lg block whitespace-nowrap'
    >Log In</button></Link>
  </div>
  <div>
    <FaCartPlus 
    className='text-white text-2xl'
    />
  </div>
 
</div>

    </div>
    <div className='h-10 bg-gray-800 flex items-center px-5'>
    <ul className='hidden text-white gap-4 md:flex'>
        <li className='flex justify-center gap-1'><GiHamburgerMenu 
        className='text-white h-full w-6 cursor-pointer'/>All</li>
<li>Today's Deals</li>
<li>Registry</li>
<li>Prime Video</li>
<li>Gift Cards</li>
<li>Customer Service</li>
<li>Sell</li>
    </ul>

    </div>
    </div>
  )
}

export default Nav