
import { GrInstagram} from "react-icons/gr";
import { FaAnchor, FaAirFreshener, FaRegEye} from "react-icons/fa";
import MenuIcon from '../MenuIcon';

const Navbar = () => {
  return (
    <div >
      <ul>
        <MenuIcon icon={<FaAnchor />} text={`Home`} link={"/"}/>
        <MenuIcon icon={<FaRegEye />} text={`Services`} link={"/services"}/> 
        <MenuIcon icon={<FaAirFreshener />} text={`Pricing`} link={"/pricing"}/>                       
        <MenuIcon icon={<GrInstagram />} text={`Social`} link={"https://www.instagram.com/missipepperpoppy/"}/>   
      </ul>
    </div>
    );
};
export default Navbar; 

