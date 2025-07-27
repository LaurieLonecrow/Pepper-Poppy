
//components
import Welcome from '../components/Welcome';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import NavItem from '../components/NavItem'
import { FaBookDead} from "react-icons/fa";


const Home = () => {
  return (
  <>      
      <Title/>
      <Header/>
      <Footer/>
      <NavItem icon={<FaBookDead />} text={`Booking`} link={"https://squareup.com/appointments/book/kr1xtlegh95ars/L04SAB7524188/services"}/>                       
      <Welcome/>
  </>  
  );
};
export default Home; 

