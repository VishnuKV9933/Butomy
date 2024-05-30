import React from 'react'
import arrow from '../../assets/arrowdawn.png'
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  return (
    <div className='w-full flex justify-between px-2 md:px-[100px] py-2 items-center'>
     <div className="   text-custom-green font-bold text-xl">
          banquee.
        </div>

        <ul className=' gap-2 items-center hidden md:flex cursor-pointer'>
            <li>Features</li>
            <li className='flex items-center gap-2 rounded-md bg-[#F8F8F8] p-2'>
                <h1>Compare</h1>
                <img className='w-2' src={arrow} alt="img" />
            </li>

            <li>Support</li>
            <li className='flex items-center gap-2 rounded-md bg-[#F8F8F8] p-2'>
                <h1>Blog</h1>
                <img className='w-2' src={arrow} alt="img" />
            </li>
        </ul>

        <div className='flex items-center gap-3'>
            <h1>Login</h1>
            <button className='bg-[#5BB5A2] text-white p-2 rounded-md'>Open Account</button>
            <IoMdMenu className='md:hidden cursor-pointer text-[30px]' />

        </div>
    </div>
  )
}
