import { Ref } from 'react';
interface HeaderProps {
    snap: string;
    visibilityRef: Ref<HTMLDivElement>;
}
declare const Header: ({ visibilityRef, snap }: HeaderProps) => JSX.Element;
export default Header;
