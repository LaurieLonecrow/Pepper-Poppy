
import { FaBookDead} from "react-icons/fa";
import MenuIcon from '../MenuIcon';

const Navbar = () => {
  return (
    <div className={'navbar'}>
        <MenuIcon icon={<FaBookDead />} text={`Booking`} link={"https://squareup.com/appointments/book/kr1xtlegh95ars/L04SAB7524188/services"}/>                       
    </div>
    );
};
export default Navbar; 

