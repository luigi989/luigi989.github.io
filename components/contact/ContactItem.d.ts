/// <reference types="react" />
interface ContactItemProps {
    header: string;
    contact: string;
    link: string;
    icon: React.ReactNode;
}
declare const ContactItem: ({ header, contact, link, icon }: ContactItemProps) => JSX.Element;
export default ContactItem;
