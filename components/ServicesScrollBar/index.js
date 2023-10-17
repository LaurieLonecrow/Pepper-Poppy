//components
import ScrollBar from './scrollBar';
import ServiceContent from '../ServiceContent'
import Images from '../../components/Images';
import { services } from '../../constants/services';

const Services = () => {
  return (
    <ScrollBar contents={
        <>
          {services.map(({heading, subheading, image, link, id}) => (
              <div key={id} className='flex flex-col gap-6 py-12 h-96'>
            <ServiceContent
                 heading={heading}  
                 subheading={subheading} 
                 source={<Images source={image[0].source}/>} 
                 link={`/services/${link}`}
                 />
              </div>
          ))}  
        </>}>
      </ScrollBar>
    );
  };
export default Services; 