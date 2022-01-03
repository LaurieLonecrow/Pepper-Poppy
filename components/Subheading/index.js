
const SubHeading = ({content}) => {
  return (
    <div className='relative z-10'>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-r 
      text-red-500 text-lg uppercase drop-shadow-md'>{content}</h1>
    </div>
  );
};
export default SubHeading;