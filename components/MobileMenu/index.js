import Navbar from "../Navbar";


const MobileMenu = ({className}) => {
  return (
    <div className={`fixed top-0 left-0 h-20 w-screen z-30 ${className}`}>
      <Navbar className={`text-white`}/>
    </div>
  );
};
export default MobileMenu;