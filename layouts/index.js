//components
import Circle from "../components/CircleBackground";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

const MainLayout = (props) => {
  return (
<>  
<div className={`relative overflow-x-hidden`}>
    <Circle/>
    <main className='relative'>{props.children}</main>
    <MobileMenu />
</div>
</>
  );
};
export default MainLayout; 