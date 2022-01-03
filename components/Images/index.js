
const Images = ({source}) => {
    return (
        <li className={`relative w-72 list-none md:w-96 py-4 -rotate-12`}>
        <img src={source} className='absolute grayscale-[50%] object-contain rounded-xl 
        ring-offset-8 ring-4 ring-yellow-500 hover:grayscale-[0%]'></img>
        </li>
    );
  };
  export default Images;