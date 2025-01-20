/// <reference types="react" />
interface NavItemProps {
    href: string;
    title: string;
    ariaLabel: string;
    icon: React.ReactNode;
}
declare const NavItem: ({ href, title, ariaLabel, icon }: NavItemProps) => JSX.Element;
export default NavItem;
