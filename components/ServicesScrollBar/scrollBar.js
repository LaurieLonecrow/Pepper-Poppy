import { useState, useEffect } from 'react';

const ScrollBar = ({contents, className}) => {
    
  return (
    <div className={`md:px-12`}>
    <section className={`flex flex-col gap-8 overflow-x-hidden overflow-y-auto pb-60 bg-transparent ${className}
    md:overflow-x-scroll md:overflow-y-hidden md:flex-row md:h-screen md:space-y-0 
    md:space-x-36 md:px-40`}>
        {contents}
    </section>
    </div>
    
  );
};
export default ScrollBar;