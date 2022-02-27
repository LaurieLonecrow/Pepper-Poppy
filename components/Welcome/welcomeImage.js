
const WelcomeImage = ({source, className}) => {
  
  return (
  <div className='relative '>
      <div className={`md:absolute w-screen md:w-1/2 ${className}`}>
        <img src={source} className={`grayscale-[50%] object-contain 
        hover:grayscale-[0%]`}></img>
      </div>
  </div>
  );
};

export default WelcomeImage;