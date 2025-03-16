import Link from 'next/link';

const MenuIcon = ({icon, text, link}) => (
    <li>{icon}
    <Link href={link}>
    <span>{text}</span>
    </Link>
    </li>
);

export default MenuIcon;