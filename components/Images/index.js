
const Images = ({source}) => {
    return (
        <li className='relative w-72 list-none md:w-96 py-4 -rotate-12'>
        <img src={source} className='absolute grayscale-[25%] object-contain rounded-xl 
        ring-offset-8 ring-4 ring-yellow-500 '></img>
        </li>
    );
  };
  export default Images;