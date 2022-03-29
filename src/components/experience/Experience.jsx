import React from 'react'
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const Intermediate = 'Intermediate';
  const experienced = 'Experienced';

  return (
    <section id='experience' className='mt-32 h-fit lg:h-screen pt-4 lg:pt-8'>
      <h5 className='text-light font-medium'>What Skills I have</h5>
      <h2 className='text-primaryAlt font-medium text-3xl mb-10 lg:mb-32'>My Experience</h2>

      <div className='w-11/12 lg:w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
        <div className='bg-bgAlt py-5 px-5 lg:py-10 lg:px-20 rounded-[2rem] border-solid border-[1px] border-transparent 
                        hover:bg-transparent hover:border-primary cursor-default 
                        transition ease-linear duration-300'>
          <h3 className='text-center mb-8 text-primaryAlt'>Frontend Experience</h3>
          <div className='grid grid-cols-2 gap-8'>
            <ExperienceItem lang='HTML' grade={experienced} />
            <ExperienceItem lang='CSS' grade={Intermediate} />
            <ExperienceItem lang='JavaScript' grade={experienced} />
            <ExperienceItem lang='Bootstrap' grade={experienced} />
            <ExperienceItem lang='Tailwind' grade={experienced} />
            <ExperienceItem lang='React' grade={experienced} />
          </div>
        </div>

        <div className='bg-bgAlt py-5 px-5 lg:py-10 lg:px-20 rounded-[2rem] border-solid border-[1px] border-transparent 
                        hover:bg-transparent hover:border-primary cursor-default 
                        transition ease-linear duration-300'>
          <h3 className='text-center mb-8 text-primaryAlt'>Backend Experience</h3>
          <div className='grid grid-cols-2 gap-8'>
            <ExperienceItem lang='Node JS' grade={experienced} />
            <ExperienceItem lang='MongoDB' grade={Intermediate} />
            <ExperienceItem lang='MySQL' grade={experienced} />
            <ExperienceItem lang='PostgreSQL' grade={experienced} />
            <ExperienceItem lang='Java' grade={experienced} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience