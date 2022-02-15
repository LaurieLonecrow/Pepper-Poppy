import React from 'react';
import WelcomeContent from './welcomeContent';

const Welcome = () => {
  return (
    <>
      <div className={`relative h-[35vh] md:h-[50vh]`}> </div>
      <div className={`relative w-screen h-[200vh] bg-red-200`}>
      <h1 className={`animate-dance m-12 pt-12 text-white md:absolute md:mt-8 md:right-40 font-Dancing text-8xl`}>Welcome!</h1>
    <WelcomeContent source='https://res.cloudinary.com/lonecrow/image/upload/v1644422766/Pepper-Poppy/ACS_0129_ufsvpy.jpg'
        className={`md:top-4 md:left-36 border-solid border-[8px] md:border-[24px] border-red-200`}/>
    <WelcomeContent source='https://res.cloudinary.com/lonecrow/image/upload/v1644422766/Pepper-Poppy/ACS_0131_owrhkg.jpg'
        className={`top-48 md:top-48 md:left-[500px] border-solid border-[8px] md:border-[24px] border-red-200`}/>
    <WelcomeContent source='https://res.cloudinary.com/lonecrow/image/upload/v1644422765/Pepper-Poppy/ACS_0124_eprsen.jpg'
        className={`top-96 md:top-[36rem] md:left-36 border-solid border-[8px] md:border-[24px] border-red-200`}/>
    </div>
    </>
    );
};

export default Welcome;
