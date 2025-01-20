/// <reference types="react" />
interface AboutItemProps {
    header: string;
    text: string;
    icon: React.ReactNode;
}
declare const AboutItem: ({ header, text, icon }: AboutItemProps) => JSX.Element;
export default AboutItem;
