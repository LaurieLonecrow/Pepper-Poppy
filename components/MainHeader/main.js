import WelcomeContent from "../Welcome/welcomeImage";

const MainHeading = () => {
  const HeadingLetter = ({text}) => (
    <h1>{text}</h1>
);
return (
    <div>
        <div>
    <HeadingLetter text={`P`}/> 
    <HeadingLetter text={`e`}/> 
    <HeadingLetter text={`p`}/> 
    <HeadingLetter text={`p`}/> 
    <HeadingLetter text={`e`}/> 
    <HeadingLetter  text={`r`}/> 
        </div>
        <div >
    <HeadingLetter text={`A`}/> 
    <HeadingLetter text={`n`}/>
    <HeadingLetter text={`d`}/> 
        </div>
        <div>
    <HeadingLetter text={`P`}/>
    <HeadingLetter text={`o`}/>
    <HeadingLetter text={`p`}/>
    <HeadingLetter text={`p`}/>
    <HeadingLetter text={`y`}/>
    </div>
    </div>  
);
  };
  export default MainHeading;