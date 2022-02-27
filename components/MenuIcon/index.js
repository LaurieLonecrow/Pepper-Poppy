import Link from 'next/link';

const MenuIcon = ({icon, text, link, className}) => (
    <li className={`menu-icon group  ${className}`}>{icon}
        <span className="menu-small-circle-1 group-hover:translate-x-10 group-hover:-translate-y-8 group-hover:scale-100"></span>
        <span className="menu-small-circle-2 group-hover:-translate-y-10 group-hover:scale-100"></span>
        <span className="menu-small-circle-3 group-hover:translate-x-8 group-hover:translate-y-8 group-hover:scale-100"></span>
        <span className="menu-small-circle-4 group-hover:-translate-x-10 group-hover:translate-y-10 group-hover:scale-100"></span>
        <span className="menu-small-circle-5 group-hover:-translate-x-8 group-hover:-translate-y-8 group-hover:scale-100"></span>
    <Link href={link}>
    <span className="menu-text group-hover:scale-100">{text}</span>
    </Link>
    </li>
);

export default MenuIcon;