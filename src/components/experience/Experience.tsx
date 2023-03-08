import { Ref } from 'react';
import SectionHeader from '../shared/SectionHeader';
import ExperienceItem from './ExperienceItem';

interface ExperienceProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

const Experience = ({ visibilityRef, snap }: ExperienceProps) => {
  const Intermediate = 'Intermediate';
  const experienced = 'Experienced';

  return (
    <section ref={visibilityRef} id='experience' className={ snap + ' mt-32 h-fit lg:h-screen pt-4 lg:pt-8 print:h-screen'}>
      <SectionHeader
        header='My Experience'
        subHeader='What Skills I have'
      />

      <div className='w-11/12 lg:w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
        <div className='bg-liSec dark:bg-bgAlt py-5 px-5 lg:py-10 lg:px-20 rounded-[2rem] border-solid border-[1px] border-transparent 
                        transition ease-linear duration-300'>
          <h1 className='text-center mb-8 text-liBg dark:text-primaryAlt'>Frontend Experience</h1>
          <div className='grid grid-cols-2 gap-8'>
            <ExperienceItem lang='React' grade={experienced} />
            <ExperienceItem lang='JavaScript' grade={Intermediate} />
            <ExperienceItem lang='HTML' grade={experienced} />
            <ExperienceItem lang='CSS' grade={experienced} />
            <ExperienceItem lang='Tailwind' grade={experienced} />
            <ExperienceItem lang='Bootstrap' grade={Intermediate} />
          </div>
        </div>

        <div className='bg-liSec dark:bg-bgAlt py-5 px-5 lg:py-10 lg:px-20 rounded-[2rem] border-solid border-[1px] border-transparent 
                        transition ease-linear duration-300'>
          <h1 className='text-center mb-8 text-liBg dark:text-primaryAlt'>Backend Experience</h1>
          <div className='grid grid-cols-2 gap-8'>
            <ExperienceItem lang='Java' grade={experienced} />
            <ExperienceItem lang='C#' grade={Intermediate} />
            <ExperienceItem lang='MySQL' grade={Intermediate} />
            <ExperienceItem lang='PostgreSQL' grade={Intermediate} />
          </div>
          <h1 className='text-center mb-8 text-liBg dark:text-primaryAlt pt-10'>Other Experience</h1>
          <div className='grid grid-cols-2 gap-8'>
            <ExperienceItem lang='Git' grade={experienced} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience