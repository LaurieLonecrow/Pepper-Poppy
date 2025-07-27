
//components
import Welcome from '../components/Welcome';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

const Home = () => {
  return (
  <>      
      <Title/>
      <Header/>
      <Footer/>
      <MobileMenu />

      <Welcome/>
  </>  
  );
};
export default Home; 

