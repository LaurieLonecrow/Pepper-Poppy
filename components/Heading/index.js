
const Heading = ({content}) => {
  return (
    <div className='relative z-10 '>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-r 
      from-green-700 via-yellow-400 to-red-700 text-5xl font-Bungee drop-shadow-xl'>{content}</h1>
    </div>
  );
};
export default Heading;