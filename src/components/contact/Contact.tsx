import { Ref } from 'react';
import ContactItem from './ContactItem';
import SectionHeader from '../shared/SectionHeader';
import { contacts } from '../../data/data';
import ContactForm from './ContactForm';

interface ContactProps {
  snap: string;
  visibilityRef: Ref<HTMLDivElement>;
}

const Contact = ({ visibilityRef, snap }: ContactProps) => {
  return (
    <section ref={visibilityRef} id='contact' className={snap + ' mb-10 lg:mb-0 mt-16 lg:mt-32 h-fit lg:h-screen pt-4 lg:pt-8 print:h-screen'}>
      <SectionHeader
        className='lg:mb-16'
        header='Contact me'
        subHeader='Get in touch'
      />

      <div className='w-11/12 lg:w-3/5 m-auto flex flex-col md:flex-row gap-10 lg:gap-20'>
        <div className='flex flex-col gap-6 bg-liBg dark:bg-transparent print:flex-row print:justify-around'>
          {contacts.map((contact) => 
            <ContactItem          
              header={contact.title}
              contact={contact.subtitle}
              link={contact.link} 
              icon={contact.icon}
            />
          )}
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact