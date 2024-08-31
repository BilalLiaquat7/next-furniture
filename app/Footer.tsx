import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-black text-slate-500 py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
            <div className='bg-gray-400'>About Us</div>
            <div>Quick Links</div>
            <div>Follow Us</div>
            <div>Contct Us</div>
        </div>
        <p className='text-center text-xs pt-8 text-slate-400'>2024 Kids Furnitures. All rights reserved.</p>
    </footer>
  )
}

export default Footer