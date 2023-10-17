import Link from 'next/link';
//components
import { FaBookDead } from "react-icons/fa";
import MenuIcon from "../MenuIcon";
import Heading from "../Heading"
import SubHeading from "../Subheading"

const ServiceContent = ({heading, subheading, source, link}) => {
  return (
    <>
    <div className='relative px-12 py-4'>
      <div className='absolute top-20 flex flex-col left-4 space-y-4 md:top-40 md:-left-20'>
        <SubHeading content={subheading} /> 
        <Heading content={heading} />
        <div className={`absolute flex top-36 lg:top-24 left-6 md:left-0 text-3xl font-sans z-20` }>
        <MenuIcon className={'border-2 border-green-500 my-12'} icon={<FaBookDead />} text={`Book Now`} link={"https://squareup.com/appointments/book/kr1xtlegh95ars/L04SAB7524188/services"}/>
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