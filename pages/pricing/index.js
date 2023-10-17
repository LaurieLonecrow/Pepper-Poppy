
//components
import Heading from '../../components/Heading'
import WelcomeContent from '../../components/Welcome/welcomeContent';
import { Pricing } from '../../constants/services';
import { FaBookDead } from "react-icons/fa";
import MenuIcon from "../../components/MenuIcon";

const Products = () => {
  return (
    <div className='my-20 px-4 md:px-32'>
    <Heading content={`Pricing`}/>
    <WelcomeContent content={Pricing.prices[0]} className={`py-4 font-Quicksand text-black text-2xl whitespace-pre-wrap `}/>
    <WelcomeContent content={'**Small price increases beginning Nov 1st, 2023'} className={`py-4 font-Quicksand text-black text-2xl whitespace-pre-wrap `}/>
    <WelcomeContent content={Pricing.prices[1]} className={`py-4 font-Quicksand text-black text-2xl  `}/>
    <WelcomeContent content={Pricing.Deposits} className={`py-4 font-Quicksand text-black text-2xl  `}/>
    <WelcomeContent content={Pricing['Cancellation Policy']} className={`py-4 font-Quicksand text-black text-2xl  `}/>
    <div >
        <MenuIcon className={'border-2 border-green-500 text-3xl'} icon={<FaBookDead />} text={`Book Now`} link={"https://squareup.com/appointments/book/kr1xtlegh95ars/L04SAB7524188/services"}/>
        </div>
    </div>  
  );
};
export default Products; 
