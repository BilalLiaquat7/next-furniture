import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-white text-slate-500 py-12'>
        <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
            <div>
            <h2 className="text-slate-900 text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
            </div>
            <div>
            <h2 className="text-slate-900 text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
            <li>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
            </div>
            <div>
          <h2 className="text-slate-900 text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-pink-600 transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-pink-600 transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-pink-600 transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-slate-900 text-lg font-semibold mb-4">Contact Us</h2>
          <p>Islamabad, Pakistan</p>
          <p>Islamabad 44000</p>
          <p>Email: kidfurniturespk@gmail.com</p>
          <p>Phone: (92)333 510-2230</p>
        </div>
        </div>
        <p className='text-center text-xs pt-8 text-slate-400'>2024 Kids Furnitures. All rights reserved.</p>
    </footer>
  )
}

export default Footer