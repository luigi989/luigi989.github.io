/// <reference types="react" />
interface ServiceListProps {
    title: string;
    children: React.ReactNode;
}
declare const ServiceList: ({ title, children }: ServiceListProps) => JSX.Element;
export default ServiceList;
