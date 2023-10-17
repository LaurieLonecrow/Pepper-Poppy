
const StyleImage = ({source}) => {
  return (
      <li className={`list-none md:w-96 py-4`}>
      <img src={source} className='absolute w-96 h-96 object-cover rounded-xl 
      bg-gradient-to-br from-green-900'></img>
      </li>
  );
};
export default StyleImage;