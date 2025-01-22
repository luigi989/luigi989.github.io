/// <reference types="react" />
interface NavItemProps {
    href: string;
    title: string;
    icon: React.ReactNode;
}
declare const NavItem: ({ href, title, icon }: NavItemProps) => JSX.Element;
export default NavItem;
