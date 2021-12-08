import Navbar from "../Navbar";


export default function MobileMenu({className}) {

    return (
        
        <div className={`fixed bottom-0 h-20 w-screen ${className}`}>
            <Navbar className={`text-white w-screen`}/>
        </div>
        
    )
}