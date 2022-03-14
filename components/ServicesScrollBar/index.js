//components
import ScrollBar from './scrollBar';
import ServiceContent from '../ServiceContent'
import Images from '../../components/Images';
import { services } from '../../constants/services';

const Services = () => {
  return (
    <ScrollBar contents={
        <>
          {services.map(({heading, subheading, image}, id) => (
              <div key={id} className='flex flex-col py-12 h-60'>
            <ServiceContent 
                 heading={heading}  
                 subheading={subheading} 
                 source={<Images source={image[0].source}/>} 
              />
              </div>
          ))}  
        </>}>
      </ScrollBar>
    );
  };
export default Services; 