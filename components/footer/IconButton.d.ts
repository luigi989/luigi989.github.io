/// <reference types="react" />
interface IconButtonProps {
    link: string;
    ariaLabel: string;
    title: string;
    icon: React.ReactNode;
}
declare const IconButton: ({ link, ariaLabel, title, icon }: IconButtonProps) => JSX.Element;
export default IconButton;
