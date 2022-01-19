//components
import ScrollBar from './scrollBar';
import Content from '../../components/Content'
import Images from '../../components/Images';
import { services } from '../../constants/services';

const Services = () => {
  return (
    <ScrollBar contents={
        <>
          {services.map(({heading, subheading, image, id}) => (
              <div key={id} className='flex flex-col px-8 py-16 h-60'>
            <Content 
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