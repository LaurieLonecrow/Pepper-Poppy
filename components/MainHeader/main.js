const MainHeading = ({content}) => {
    return (
      <div className='relative'>
        <h1 className='bg-clip-text text-transparent bg-gradient-to-r 
        from-green-700 via-yellow-400 to-red-700 text-8xl font-Bungee 
        drop-shadow-xl -rotate-12'>{content}</h1>
      </div>
    );
  };
  export default MainHeading;