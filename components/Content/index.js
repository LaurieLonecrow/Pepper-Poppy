//components
import Heading from "../Heading"
import SubHeading from "../Subheading"

const Content = ({heading, subheading, source}) => {
  return (
    <div className='relative px-12 py-4'>
      <div className='absolute top-20 flex flex-col -left-4 md:space-y-10 md:top-40 md:-left-20'>
        <SubHeading content={subheading} /> 
        <Heading content={heading} />
      </div>
      <ul className='hover:first:h-72'>{source}</ul>
    </div>
  );
};
export default Content;