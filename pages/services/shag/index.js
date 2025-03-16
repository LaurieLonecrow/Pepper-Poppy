//components
import ScrollBar from '../../../components/ServicesScrollBar/scrollBar';
import StyleImages from '../../../components/Images/styleImage';
import { services } from '../../../constants/services';

const ShagPage = () => {
 
  return (
    <>
    <ScrollBar contents={
        <>
          {services[1].styleImages.map(({id, source}) => (
              <div key={id} >
            <StyleImages source={source}/>
              </div>
          ))}  
        </>}>
      </ScrollBar>
    </>  
  );
};
export default ShagPage; 