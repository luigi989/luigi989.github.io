import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="hidden lg:flex flex-col items-center gap-3 absolute left-0 bottom-12
                    after:content-[''] after:w-[1px] after:h-8 after:bg-liSec dark:after:bg-primaryAlt">
      {[['https://www.linkedin.com/in/ludvig-lindahl/', <BsLinkedin />],
        ['https://github.com/luigi989', <BsGithub />],
        ['https://www.facebook.com/ludvig.lindahl.1', <BsFacebook />]
      ].map(([url, icon]) => (
          <a key={url} className='inline-block transition ease-linear duration-300
          text-liSec hover:text-liLight dark:text-primaryAlt dark:hover:text-white'
            href={url} target='_blank' rel='noreferrer'>{icon}</a>
        ))}
    </div>
  )
}

export default HeaderSocials;