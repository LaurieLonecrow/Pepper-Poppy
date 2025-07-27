//components
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

const MainLayout = (props) => {
  return (
    <>
    <main>{props.children}</main>
  </>
  );
};
export default MainLayout; 