import WelcomeContent from "../Welcome/welcomeContent";

const MainHeading = () => {
  const HeadingLetter = ({text, className}) => (
    <h1 className={`font-Bungee text-6xl sm:text-8xl ${className}`}>{text}</h1>
);
return (
    <div className="fixed w-screen flex flex-col justify-center py-20 sm:px-20 md:flex-row md:pl-32">
        <div className="flex w-screen justify-center">
    <HeadingLetter className="animate-fade-in-down-1 md:mt-10 text-white " text={`P`}/> 
    <HeadingLetter className="animate-fade-in-down-2 md:mt-10 text-white" text={`e`}/> 
    <HeadingLetter className="animate-fade-in-down-3 md:mt-10 text-white" text={`p`}/> 
    <HeadingLetter className="animate-fade-in-down-1 md:mt-10 text-white" text={`p`}/> 
    <HeadingLetter className="animate-fade-in-down-2 md:mt-10 text-white" text={`e`}/> 
    <HeadingLetter className="animate-fade-in-down-3 md:mt-10 text-white" text={`r`}/> 
        </div>
        <div className="flex w-screen justify-center">
    <HeadingLetter className="animate-fade-in-down-1 md:mt-20 text-white"text={`A`}/> 
    <HeadingLetter className="animate-fade-in-down-2 md:mt-20 text-white"text={`n`}/>
    <HeadingLetter className="animate-fade-in-down-3 md:mt-20 text-white"text={`d`}/> 
        </div>
        <div className="flex w-screen justify-center">
    <HeadingLetter className="animate-fade-in-down-1 md:mt-10 text-white" text={`P`}/>
    <HeadingLetter className="animate-fade-in-down-2 md:mt-10 text-white" text={`o`}/>
    <HeadingLetter className="animate-fade-in-down-3 md:mt-10 text-white" text={`p`}/>
    <HeadingLetter className="animate-fade-in-down-1 md:mt-10 text-white" text={`p`}/>
    <HeadingLetter className="animate-fade-in-down-2 md:mt-10 text-white" text={`y`}/>
    </div>
    </div>  
);
  };
  export default MainHeading;