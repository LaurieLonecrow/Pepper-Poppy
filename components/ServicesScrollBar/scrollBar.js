
const ScrollBar = ({contents, className}) => {
  return (
    <div className={`flex flex-col space-y-60 overflow-x-hidden overflow-y-auto pb-60 ${className}
    md:overflow-x-scroll md:overflow-y-hidden md:flex-row md:h-screen md:space-y-0 
    md:space-x-36 md:px-20`}>
        {contents}
    </div>
  );
};
export default ScrollBar;