import React from 'react'
import bunker from "./../public/images/bunker.jpeg";


const Banner = () => {

    return (
      <header className='relative w-full hidden sm:block sm:h-auto md:h-auto lg:h-auto overflow-hidden'>
        <img className='w-full h-1/2 object-center transition-transform duration-500 ease-in-out transform scale-100 lg:scale-100' src="/images/bunker.jpeg" alt="" />
      </header>

    );

}

export default Banner