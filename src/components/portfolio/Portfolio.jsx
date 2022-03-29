import React from 'react'
import PortfolioCard from './PortfolioCard';
import portfolio1 from '../../assets/portfolio1.jpg';
import portfolio2 from '../../assets/portfolio2.jpg';
import portfolio3 from '../../assets/portfolio3.jpg';
import portfolio4 from '../../assets/portfolio4.jpg';
import portfolio5 from '../../assets/portfolio5.png';
import portfolio6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio' className='mt-32 h-fit lg:h-screen pt-4 lg:pt-8'>
      <h5 className='text-light font-medium'>My Recent Work</h5>
      <h2 className='text-primaryAlt font-medium text-3xl lg:mb-16'>Portfolio</h2>

      <div className='w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <PortfolioCard 
          header='Crypto Currency Dashboard and Financial Visualization' 
          path={portfolio1} 
        />
        <PortfolioCard 
          header='Charts templates and infographs in Figma' 
          path={portfolio2} 
        />
        <PortfolioCard 
          header='Figma dashboard UI kit for data design with apps' 
          path={portfolio3} 
        />
        <PortfolioCard 
          header='Maintaining tasks and tracking process' 
          path={portfolio4} 
        />
        <PortfolioCard 
          header='Charts tempaltes and infographs in Figma' 
          path={portfolio5} 
        />
        <PortfolioCard 
          header='Charts tempaltes and infographs in Figma' 
          path={portfolio6} 
        />
      </div>
    </section>
  )
}

export default Portfolio