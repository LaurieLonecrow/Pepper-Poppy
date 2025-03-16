import { useRef, useState } from 'react';
import { Bio } from '../../constants/services';
import useInView from '../../hooks/useInView';
import WelcomeContent from './welcomeContent';
import WelcomeImage from './welcomeImage';

const Welcome = () => {
  return (
    <>
      <div>
      <h1>Welcome!</h1>
     </div>
     <WelcomeContent content={Bio.intro}/>
     <WelcomeContent content={Bio.about[0]}/>
     <WelcomeContent content={Bio.about[1]}/>

    </>
    );
};

export default Welcome;
