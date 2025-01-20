import { Ref } from 'react';
interface AboutProps {
    snap: string;
    visibilityRef: Ref<HTMLDivElement>;
}
declare function About({ visibilityRef, snap }: AboutProps): JSX.Element;
export default About;
