import {useRef, useState} from 'react';
import useInView from '../../hooks/useInView';

const WelcomeContent = ({content, className}) => {
  const el = useRef();
  const [show, setShow] = useState(false);
  useInView(el, (triggered) => {
    setShow(triggered);
  });
  return (
    <div ref={el} className={`${show ? `animate-appear-up`:null} ${className}`}>{content}</div>
  )
}

export default WelcomeContent