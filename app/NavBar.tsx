'use client';
import Link from 'next/link'
import React from 'react'
import {usePathname}  from 'next/navigation';
import classNames from 'classnames';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {

  let nav: boolean = true;
  const handleNav = () => {
    nav = !nav;
    console.log(nav)
  };
    const currentPath = usePathname();

    const links= [
        {label: 'Home', href:'/'},
        {label: 'Boys Room', href:'/issues'},
        {label: 'Girls Room', href:'/issues'},
        {label: 'Sleep In Style', href:'/issues'},
        {label: 'Stylish Storage', href:'/issues'}
    ]

  return (
    <div className='border-b flex justify-between sticky p-6 items-center'>
      <GiHamburgerMenu onClick={()=> handleNav()} className='hover:cursor-pointer md:hidden'/>
      <div className='md:text-xl items-center font-bold text-slate-900 cursor-pointer hover:text-pink-600'>
        TECHWAYS
      </div>
      <nav className='hidden md:block text-white justify-between items-center mx-12'>
        <div className='flex justify-end items-center'>
          <Link href='/'></Link>
          <ul className='flex space-x-6'>
          {
            links.map((link) => 
            <Link key={link.href}
            className={classNames({
              'text-pink-600': link.href === currentPath,
              'text-zinc-900': link.href !== currentPath,
              'hover:text-pink-600 transition-colors': true
              })} 
              href={link.href}>{link.label}</Link>)
              }
          </ul>
        </div>
      </nav>
            <FaCartShopping/>
    </div>
  )
}

export default NavBar