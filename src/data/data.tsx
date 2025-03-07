import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { BsBriefcase, BsMessenger, BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

export const sections =
    [
        { title: 'sections.home', link: '/#', icon: <AiOutlineHome/> },
        { title: 'sections.about', link: '#about', icon: <AiOutlineUser/> },
        { title: 'sections.experience', link: '#experience', icon: <BiBook/>},
        { title: 'sections.portfolio', link: '#portfolio', icon: <BsBriefcase/> },
        { title: 'sections.contact', link: '#contact', icon: <BiMessageSquareDetail/> },
    ];

export const portfolio =
    [
        { 
            title: 'Periodic', 
            github_link: 'https://github.com/luigi989/periodic', 
            live_demo: '', tags: ['React', 'TypeScript', 'Tailwind'], 
            description: 'Periodic is an interactive model over the periodic system.', 
            link: "periodic"
        },
        { 
            title: 'MealPlanner', 
            github_link: 'https://github.com/luigi989/periodic', 
            live_demo: '', 
            tags: ['Flutter', 'Dart'], 
            description: 'App for planning meals.', 
            link: "mealPlanner"
        },
        { 
            title: 'SpaceQ', 
            github_link: 'https://github.com/HawkieOne/space-app', 
            live_demo: '', 
            tags: ['NextJs', 'Tailwind', 'Recoil'], 
            description: 'SpaceQ fetches data from an API about happenings regarding human events in space.', 
            link: "spaceq"
        },
        { 
            title: 'Kurskatalog', 
            github_link: 'https://github.com/HawkieOne/kurskatalog-id', 
            live_demo: '', 
            tags: ['TypeScript', 'Tailwind', 'DaisyUI'], 
            description: 'A tool for planning your education.', 
            link: "kurskatalog"
        },
        { 
            title: 'Ragnarok', 
            github_link: 'https://github.com/luigi989/ragnarok', 
            live_demo: '', 
            tags: ['React'], 
            description: 'Website about nordic mythology.', 
            link: "ragnarok"
        },
    ];

export const socials = 
    [
        { 
            title: 'socials.linkedin',
            link: 'https://www.linkedin.com/in/ludvig-lindahl/',
            icon: <BsLinkedin />
        },
        {
            title: 'socials.github',
            link: 'https://github.com/luigi989',
            icon: <BsGithub />
        },
        {
            title: 'socials.facebook',
            link: 'https://www.facebook.com/ludvig.lindahl.1',
            icon: <BsFacebook />
        }
    ];

    export const contacts = [
        { 
            title: 'contact.social.email',
            subtitle: 'ludde.lindahl@gmail.com',
            link: 'mailto:ludde.lindahl@gmail.com',
            icon: <FiMail />
        },
        {
            title: 'contact.social.messenger',
            subtitle: 'Ludvig Lindahl',
            link: 'https://m.me/ludvig.lindahl.1',
            icon: <BsMessenger />
        },
        {
            title: 'contact.social.whatsapp',
            subtitle: '+46705789618',
            link: 'https://wa.me/46705789618',
            icon: <BsWhatsapp />
        }
    ]