import React from 'react'
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import profileImage_xs from '../../assets/profile_image/profileImage-xs.webp';
import profileImage_sm from '../../assets/profile_image/profileImage-sm.webp';
import profileImage from '../../assets/profile_image/profileImage.webp';
import profileImage_xl from '../../assets/profile_image/profileImage-xl.webp';
import profileImage_xxl from '../../assets/profile_image/profileImage-xxl.webp';


const Header = ({ visibilityRef, snap }) => {

  return (
    <header ref={visibilityRef} className={snap + ' h-fit md:h-[68vh] lg:h-screen w-3/4 m-auto pt-16 overflow-hidden'}>
      <div className='h-full w-11/12 md:w-3/4 m-auto text-center relative text-liSec dark:text-white'>

        <div className='p-1 flex flex-col bg-liBg dark:bg-transparent w-fit m-auto'>
          <h1 className='mb-3 text-center text-liLight dark:text-light font-medium text-3xl'>Hello I'm Ludvig Lindahl</h1>
          <h2 className='text-center text-liSec dark:text-primaryAlt font-medium text-2xl'>Fullstack Developer</h2>
        </div>

        <CTA />
        <a 
          href='#contact' 
          title='Scroll down'
          className='hidden lg:block text-liSec hover:text-liLight dark:text-primaryAlt dark:hover:text-white 
                                      p-1 bg-liBg dark:bg-transparent text-sm
                                      absolute -right-9 bottom-20 rotate-90 font-light'>Scroll Down</a>
        <HeaderSocials />

        <div className='bg-gradient-to-b from-liSec dark:from-primaryAlt md:w-[22rem] md:h-[30rem] mt-16 
                        rounded-tl-[12rem] rounded-tr-[12rem] 
                        mx-auto overflow-hidden px-1 pb-6 pt-20'>
          <img className='block object-cover' alt='me'
              src={profileImage_xs} 
              srcSet={`${profileImage} 4x, ${profileImage_sm} 3x, ${profileImage_sm} 2x, ${profileImage_sm} 1x, `}
            />
        </div>

      </div>
    </header>
  )
}

export default Header