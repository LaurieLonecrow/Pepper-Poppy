
export default function Header() {


    const HeaderLetter = ({text, className}) => (
        <h1 className={`font-Londrina sm:text-8xl text-3xl ${className}`}>{text}</h1>
    );
    
    return (
        <div className="relative w-screen h-48 flex justify-center mt-20">
        <HeaderLetter className="animate-fade-in-down-1 mt-10 text-green-600 " text={`P`}/> 
        <HeaderLetter className="animate-fade-in-down-2 mt-10 text-red-600" text={`e`}/> 
        <HeaderLetter className="animate-fade-in-down-1 mt-10 text-indigo-400" text={`P`}/> 
        <HeaderLetter className="animate-fade-in-down-3 mt-10 text-yellow-500" text={`p`}/> 
        <HeaderLetter className="animate-fade-in-down-1 mt-10 text-green-600" text={`e`}/> 
        <HeaderLetter className="animate-fade-in-down-2 mt-10 text-red-600" text={`r`}/> 

        <HeaderLetter className="animate-fade-in-down-1 mt-20 text-indigo-400"text={`A`}/> 
        <HeaderLetter className="animate-fade-in-down-2 mt-20 text-yellow-500"text={`n`}/>
        <HeaderLetter className="animate-fade-in-down-3 mt-20 text-green-600"text={`d`}/> 

        <HeaderLetter className="animate-fade-in-down-1 mt-10 text-red-600" text={`P`}/>
        <HeaderLetter className="animate-fade-in-down-3 mt-10 text-indigo-400" text={`o`}/>
        <HeaderLetter className="animate-fade-in-down-2 mt-10 text-yellow-500" text={`p`}/>
        <HeaderLetter className="animate-fade-in-down-1 mt-10 text-green-600" text={`p`}/>
        <HeaderLetter className="animate-fade-in-down-3 mt-10 text-red-600" text={`y`}/>




        </div>
    )
}