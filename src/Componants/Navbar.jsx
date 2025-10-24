import React from 'react'
import logo from '../assets/Group1.png'
import setting from '../assets/Units Icon.png'
import down from '../assets/Units Dropdown Icon.png'
export const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5'>
        <div>
            <div className='flex gap-5'>
                <img className='w-10 h-10' src={logo} alt="logo" />
                <h1 className='text-white lg:text-3xl font-header'>Weather Now</h1>
            </div>
        </div>
        <div>
            <button className='bg-[#262540] rounded-md py-2 px-4 text-white flex gap-3 items-center cursor-pointer'><img src={setting} alt="" /> Unit <img src={down} alt="" /></button>
        </div>
    </div>
  )
}
