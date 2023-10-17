
const Images = ({source}) => {
    return (
        <li className={`list-none md:w-96 py-4 -rotate-12 cursor-pointer hover:rotate-0 transition-transform`}>
        <img src={source} className='absolute grayscale-[50%] w-96 h-96 object-cover rounded-xl 
        ring-offset-8 ring-4 ring-yellow-300 bg-gradient-to-br from-green-900 hover:grayscale-[0%]'></img>
        </li>
    );
  };
  export default Images;