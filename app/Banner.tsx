import React from 'react'
import bunker from "./../public/images/bunker.jpeg";


const Banner = () => {

    return (
      <header className='relative w-full hidden md:block md:h-96 lg:h-auto overflow-hidden'>
        <img className='w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform scale-100 lg:scale-125' src="/images/bunker.jpeg" alt="" />
      </header>

    );

}

export default Banner