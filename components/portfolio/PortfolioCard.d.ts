interface PortfolioCardProps {
    header: string;
    path: string;
    onClick: () => void;
    path1x: string;
    path2x: string;
    path3x: string;
    path4x: string;
}
declare const PortfolioCard: ({ header, path, onClick, path1x, path2x, path3x, path4x, }: PortfolioCardProps) => JSX.Element;
export default PortfolioCard;
