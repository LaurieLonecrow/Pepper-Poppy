
const Header = () => {
  const HeaderLetter = ({text, className}) => (
        <h1 className={`font-BungeeShade text-6xl sm:text-8xl ${className}`}>{text}</h1>
    );
  return (
        <div className="relative w-screen h-48 flex flex-col md:flex-row justify-center mt-20 sm:px-20">
            <div className="flex w-screen justify-center">
        <HeaderLetter className="animate-fade-in-down-1 md:mt-10 text-green-600 " text={`P`}/> 
        <HeaderLetter className="animate-fade-in-down-2 md:mt-10 text-red-600" text={`e`}/> 
        <HeaderLetter className="animate-fade-in-down-3 md:mt-10 text-indigo-500" text={`p`}/> 
        <HeaderLetter className="animate-fade-in-down-1 md:mt-10 text-yellow-500" text={`p`}/> 
        <HeaderLetter className="animate-fade-in-down-2 md:mt-10 text-green-600" text={`e`}/> 
        <HeaderLetter className="animate-fade-in-down-3 md:mt-10 text-red-600" text={`r`}/> 
            </div>
            <div className="flex w-screen justify-center">
        <HeaderLetter className="animate-fade-in-down-1 md:mt-20 text-indigo-500"text={`A`}/> 
        <HeaderLetter className="animate-fade-in-down-2 md:mt-20 text-yellow-500"text={`n`}/>
        <HeaderLetter className="animate-fade-in-down-3 md:mt-20 text-green-600"text={`d`}/> 
            </div>
            <div className="flex w-screen justify-center">
        <HeaderLetter className="animate-fade-in-down-1 md:mt-10 text-red-600" text={`P`}/>
        <HeaderLetter className="animate-fade-in-down-2 md:mt-10 text-indigo-500" text={`o`}/>
        <HeaderLetter className="animate-fade-in-down-3 md:mt-10 text-yellow-500" text={`p`}/>
        <HeaderLetter className="animate-fade-in-down-1 md:mt-10 text-green-600" text={`p`}/>
        <HeaderLetter className="animate-fade-in-down-2 md:mt-10 text-red-600" text={`y`}/>
        </div>
        </div>
  );
};
export default Header; 