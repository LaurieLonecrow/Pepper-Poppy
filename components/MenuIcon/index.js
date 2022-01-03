import Link from 'next/link';

const MenuIcon = ({icon, text, link, className}) => (
    <li className={`menu-icon group ${className}`}>{icon}
    <Link href={link}>
    <span className="menu-text group-hover:scale-100">{text}</span>
    </Link>
    </li>
);

export default MenuIcon;