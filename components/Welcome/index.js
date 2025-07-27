import { Bio } from '../../constants/services';
import WelcomeContent from './welcomeContent';

const Welcome = () => {
  return (
    <div className={'welcome'}>
     <WelcomeContent content={Bio.intro}/>
     <WelcomeContent content={Bio.about[0]}/>
     <WelcomeContent content={Bio.about[1]}/>
    </div>
    );
};

export default Welcome;
