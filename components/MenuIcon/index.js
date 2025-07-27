import Link from 'next/link';

const MenuIcon = ({icon, text, link}) => (
    <div className={'navbar-item'}>
        <div className={'icon'}>{icon}</div>
        <Link href={link}>
         <span>{text}</span>
        </Link>
    </div>
);

export default MenuIcon;