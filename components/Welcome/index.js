import { useRef, useState } from 'react';
import { Bio } from '../../constants/services';
import useInView from '../../hooks/useInView';
import WelcomeContent from './welcomeContent';
import WelcomeImage from './welcomeImage';

const Welcome = () => {
  // const el = useRef();
  // const el2 = useRef();
  // const [show, setShow] = useState(false);
  // const [show2, setShow2]= useState(false);
  // useInView(el, (triggered) => {
  //   setShow(triggered);
  // });
  // useInView(el2, (triggered) => {
  //   setShow2(triggered);
  // });
  

  return (
    <>
      {/* <section className={`relative h-[35vh] md:h-[50vh]`}></section>  */}
      <div className={`relative w-screen h-[170vh] bg-red-200`}>
      <h1 className={`animate-dance m-8 pt-12 text-white md:absolute md:mt-8 md:right-40 font-Licorice text-8xl`}>Welcome!</h1>
    <WelcomeImage source='https://res.cloudinary.com/lonecrow/image/upload/v1644422766/Pepper-Poppy/ACS_0129_ufsvpy.jpg'
        className={`md:top-4 md:left-36 border-solid border-[8px] md:border-[24px] border-red-200`}/>
    <WelcomeImage source='https://res.cloudinary.com/lonecrow/image/upload/v1644422766/Pepper-Poppy/ACS_0131_owrhkg.jpg'
        className={`top-48 md:top-48 md:left-[500px] border-solid border-[8px] md:border-[24px] border-red-200`}/>
    <WelcomeImage source='https://res.cloudinary.com/lonecrow/image/upload/v1644422765/Pepper-Poppy/ACS_0124_eprsen.jpg'
        className={`top-96 md:top-[36rem] md:left-36 border-solid border-[8px] md:border-[24px] border-red-200`}/>
     </div>
     <WelcomeContent content={Bio.intro} className={`px-6 font-Quicksand text-black text-2xl whitespace-pre-wrap md:text-3xl md:px-32`}/>
     <WelcomeContent content={Bio.about[0]} className={`px-6 py-4 font-Quicksand text-black text-2xl whitespace-pre-wrap md:text-3xl md:px-32 `}/>
     <WelcomeContent content={Bio.about[1]} className={`px-6 py-4 font-Quicksand text-black text-2xl whitespace-pre-wrap md:text-3xl md:px-32 `}/>

    </>
    );
};

export default Welcome;
