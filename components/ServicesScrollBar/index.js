//components
import Content from '../../components/Content'
import Images from '../../components/Images';
import { services } from '../../constants/services';

const Services = () => {
  return (
    <>
      <div className='overflow-x-auto overflow-y-hidden flex h-screen space-x-36 px-8 py-16 lg:p-24'>
        {services.map(({heading, subheading, image, id}) => (
          <Content id={id}
               heading={heading}  
               subheading={subheading} 
               source={image.map(each => (<Images id={each.id} source={each.source}/>))} />    
        ))}
      </div>          
    </>  
  );
};
export default Services; 