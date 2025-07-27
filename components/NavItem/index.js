import Link from 'next/link';

const NavItem = ({icon, text, link}) => {
    
    return (
    <Link href={link}>
        <div className={'navbar-item'}>
            <div className={'icon'}>{icon}</div>
            <span>{text}</span>
        </div>
    </Link>
    )
};

export default NavItem;