
import Link from 'next/link';

import { GrInstagram} from "react-icons/gr";
import { FaAnchor, FaAirFreshener, FaBookDead} from "react-icons/fa";

export default function Navbar ({className}) {
    
    const MenuIcon = ({icon, text, link}) => (
        <li className="menu-icon group">{icon}
        <Link href={link}>
        <span className="menu-text group-hover:scale-100">{text}</span>
        </Link>
        </li>
    );
    
    return (
        <div className={`absolute top-0 left-0 text-3xl font-sans` }>
            <ul className={`px-4 py-4 flex ${className}`}>
            <MenuIcon icon={<FaAnchor />} text={`About`} link={"/"}/>
            <MenuIcon icon={<FaBookDead />} text={`Booking`} link={"/booking"}/>            
            <MenuIcon icon={<GrInstagram />} text={`Social`} link={"https://www.instagram.com/missipepperpoppy/"}/>   
            <MenuIcon icon={<FaAirFreshener />} text={`Products`} link={"/products"}/>            
            </ul>
        </div>

    )
}

