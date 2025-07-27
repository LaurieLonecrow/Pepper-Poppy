
//components
import Heading from '../../components/Header'
import WelcomeContent from '../../components/Welcome/welcomeContent';
import { Pricing } from '../../constants/services';
import { FaBookDead } from "react-icons/fa";
import MenuIcon from "../../components/MenuIcon";

const Products = () => {
  return (
    <div>
    <Heading content={`Pricing`}/>
    <WelcomeContent content={Pricing.prices[0]} />
    <WelcomeContent content={Pricing.prices[1]} />
    <WelcomeContent content={Pricing.Deposits} />
    <WelcomeContent content={Pricing['Cancellation Policy']} />
    <div >
        <MenuIcon icon={<FaBookDead />} text={`Book Now`} link={"https://squareup.com/appointments/book/kr1xtlegh95ars/L04SAB7524188/services"}/>
        </div>
    </div>  
  );
};
export default Products; 
