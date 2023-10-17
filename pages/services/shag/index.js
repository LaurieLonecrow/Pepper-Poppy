//components
import ScrollBar from '../../../components/ServicesScrollBar/scrollBar';
import ServiceContent from '../../../components/ServiceContent'
import StyleImages from '../../../components/Images/styleImage';
import { services } from '../../../constants/services';

const ShagPage = () => {
 
  return (
    <>
    <ScrollBar contents={
        <>
          {services[1].styleImages.map(({id, source}) => (
              <div key={id} className='flex flex-col py-12 h-96'>
            <StyleImages source={source}/>
              </div>
          ))}  
        </>}>
      </ScrollBar>
    </>  
  );
};
export default ShagPage; 