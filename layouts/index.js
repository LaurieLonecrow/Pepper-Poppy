//components
import MobileMenu from "../components/MobileMenu";

const MainLayout = (props) => {
  return (
     <>
    <main className='relative'>{props.children}</main>
    <MobileMenu />
    </>
  );
};
export default MainLayout; 