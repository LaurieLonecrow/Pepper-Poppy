
const Header = () => {
  const HeaderLetter = ({text}) => (
        <h1>{text}</h1>
    );
  return (
        <div>
            <div>
        <HeaderLetter text={`P`}/> 
        <HeaderLetter text={`e`}/> 
        <HeaderLetter text={`p`}/> 
        <HeaderLetter text={`p`}/> 
        <HeaderLetter text={`e`}/> 
        <HeaderLetter text={`r`}/> 
            </div>
            <div>
        <HeaderLetter text={`A`}/> 
        <HeaderLetter text={`n`}/>
        <HeaderLetter text={`d`}/> 
            </div>
            <div>
        <HeaderLetter text={`P`}/>
        <HeaderLetter text={`o`}/>
        <HeaderLetter text={`p`}/>
        <HeaderLetter text={`p`}/>
        <HeaderLetter text={`y`}/>
        </div>
        </div>       
  );
};
export default Header; 