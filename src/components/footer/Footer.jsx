import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({ snap }) => {
  return (
    <footer id='footer' className={ snap + ' bg-primaryAlt mt-28 py-12 px-0 text-center text-sm'}>
      <a href='/#' className='text-bg text-4xl font-medium mb-8 inline-block'>Ludvig Lindahl</a>

      <ul className='flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 mt-0 mx-auto mb-6 md:mb-12'>
        <li><a href='/#' className='text-bg hover:underline'>Home</a></li>
        <li><a href='#about' className='text-bg hover:underline'>About</a></li>
        <li><a href='#experience' className='text-bg hover:underline'>Experience</a></li>
        {/* <li><a href='#services' className='text-bg hover:underline'>Services</a></li> */}
        <li><a href='#portfolio' className='text-bg hover:underline'>Portfolio</a></li>
        <li><a href='#testimonials' className='text-bg hover:underline'>Testamonials</a></li>
        <li><a href='#contact' className='text-bg hover:underline'>Contact</a></li>
      </ul>

      <div className='flex justify-center gap-4 mb-4'>
        <a href='https://www.linkedin.com/in/ludvig-lindahl/' target='_blank' rel='noreferrer'
          className='bg-bg text-white p-3 rounded-xl flex border-2 border-solid border-transparent
          hover:bg-transparent hover:text-bg hover:border-bg transition ease-linear duration-200'><FaLinkedin /></a>
        <a href='https://github.com/luigi989' target='_blank' rel='noreferrer'
          className='bg-bg text-white p-3 rounded-xl flex border-2 border-solid border-transparent
          hover:bg-transparent hover:text-bg hover:border-bg transition ease-linear duration-200'><FaGithub /></a>
        <a href='https://www.facebook.com/ludvig.lindahl.1' target='_blank' rel='noreferrer'
          className='bg-bg text-white p-3 rounded-xl flex border-2 border-solid border-transparent
          hover:bg-transparent hover:text-bg hover:border-bg transition ease-linear duration-200'><FaFacebook /></a>
      </div>

      <div className='mb-16 text-bg'>
        <small>&copy; Ludvig Lindahl. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer