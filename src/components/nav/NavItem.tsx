import { useRecoilValue } from "recoil"
import { actioveSection } from "../../atoms/atoms"
import { useTranslation } from "react-i18next";

interface NavItemProps {
    href: string
    title: string
    icon: React.ReactNode
}

const NavItem = ({ href, title, icon }: NavItemProps) => {
    const { t } = useTranslation();
    const activeSection = useRecoilValue(actioveSection);
    
    return (
        <a className={'hover:text-liSec hover:bg-liPrimary hover:bg-opacity-80 ' +
            'dark:hover:bg-opacity-80 dark:hover:bg-primaryAlt dark:hover:text-black ' +
            'p-[0.9rem] rounded-[50%] flex text-lg ' +
            'transition ease-linear duration-300 ' +
            (activeSection == title ? 'bg-liPrimary text-gray-700 dark:bg-primaryAlt dark:text-black' 
            : 'text-liBg dark:text-primaryAlt')}
            href={href}
            title={t(title)}
            aria-label={t(title)}
        >
            {icon}
        </a>
    )
}

export default NavItem;