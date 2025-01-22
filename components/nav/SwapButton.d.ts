import { default as React } from 'react';
interface SwapButtonProps {
    className?: string;
    title: string;
    icon1: React.ReactNode;
    icon2: React.ReactNode;
    mobile?: boolean;
    onClick?: () => void;
    onClickP?: (e: React.MouseEvent<HTMLInputElement>) => void;
}
export default function SwapButton({ className, title, icon1, icon2, mobile, onClick, onClickP }: SwapButtonProps): JSX.Element;
export {};
