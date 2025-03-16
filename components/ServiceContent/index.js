import Link from 'next/link';
//components
import { FaBookDead } from "react-icons/fa";
import MenuIcon from "../MenuIcon";
import Heading from "../Heading"
import SubHeading from "../Subheading"

const ServiceContent = ({heading, subheading, source, link}) => {
  return (
    <>
    <div>
      <div>
        <SubHeading content={subheading} /> 
        <Heading content={heading} />
        <div>
        <MenuIcon icon={<FaBookDead />} text={`Book Now`} link={"https://squareup.com/appointments/book/kr1xtlegh95ars/L04SAB7524188/services"}/>
        </div>
      </div>
      <Link href={link}>
      <ul>{source}</ul>
      </Link>
    </div>
    </> 
  );
};
export default ServiceContent;