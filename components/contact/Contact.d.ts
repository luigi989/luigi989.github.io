import { Ref } from 'react';
interface ContactProps {
    snap: string;
    visibilityRef: Ref<HTMLDivElement>;
}
declare const Contact: ({ visibilityRef, snap }: ContactProps) => JSX.Element;
export default Contact;
