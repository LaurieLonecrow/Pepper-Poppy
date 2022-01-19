const Circle = ({className}) => {
    return (
        <>
        <div className={`absolute h-[60rem] w-[60rem] rounded-full animate-circle-grow bg-red-900 top-96 -right-60 ${className} `}></div>
        <div className={`absolute h-[60rem] w-[60rem] rounded-full animate-circle-grow bg-red-900 top-0 -left-60 ${className} `}></div>
        </>
    );
  };
  export default Circle;