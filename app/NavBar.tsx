'use client';
import Link from 'next/link'
import React from 'react'
import {usePathname}  from 'next/navigation';
import classNames from 'classnames';

const NavBar = () => {

    const currentPath = usePathname();

    const links= [
        {label: 'Home', href:'/'},
        {label: 'Boys Room', href:'/issues'},
        {label: 'Girls Room', href:'/issues'},
        {label: 'Sleep In Style', href:'/issues'},
        {label: 'Stylish Storage', href:'/issues'}
    ]

  return (
    <div className='border-b'>
    <nav className='text-white flex justify-between h-24 items-center mx-12'>
        <span className="text-xl flex items-center font-bold text-slate-900 cursor-pointer hover:text-pink-600">
          Techways
        </span>
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
    </div>
  )
}

export default NavBar