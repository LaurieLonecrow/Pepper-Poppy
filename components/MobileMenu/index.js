import Navbar from "../Navbar";


const MobileMenu = ({className}) => {
  return (
    <div className={`fixed bottom-0 h-20 w-screen ${className}`}>
      <Navbar className={`text-white w-screen`}/>
    </div>
  );
};
export default MobileMenu;