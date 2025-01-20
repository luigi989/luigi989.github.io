import { Ref } from 'react';
interface PortfolioProps {
    snap: string;
    visibilityRef: Ref<HTMLDivElement>;
}
declare const Portfolio: ({ visibilityRef, snap }: PortfolioProps) => JSX.Element;
export default Portfolio;
