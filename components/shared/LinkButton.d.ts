import { default as React } from 'react';
interface ButtonProps {
    link?: string;
    title: string;
    children: React.ReactNode;
}
export default function Button({ link, children, title }: ButtonProps): JSX.Element;
export {};
