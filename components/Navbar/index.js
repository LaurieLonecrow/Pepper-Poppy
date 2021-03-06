
import { GrInstagram} from "react-icons/gr";
import { FaAnchor, FaAirFreshener, FaRegEye} from "react-icons/fa";
import MenuIcon from '../MenuIcon';

const Navbar = ({className}) => {
  return (
    <div className={`absolute top-0 left-0 text-3xl font-sans` }>
      <ul className={`px-6 py-4 space-x-12 flex md:flex-col md:py-12 md:space-x-0 md:space-y-28 md:px-10 ${className}`}>
        <MenuIcon icon={<FaAnchor />} text={`Home`} link={"/"}/>
        <MenuIcon icon={<FaRegEye />} text={`Services`} link={"/services"}/> 
        <MenuIcon icon={<FaAirFreshener />} text={`Pricing`} link={"/pricing"}/>                       
        <MenuIcon icon={<GrInstagram />} text={`Social`} link={"https://www.instagram.com/missipepperpoppy/"}/>   
      </ul>
    </div>
    );
};
export default Navbar; 

