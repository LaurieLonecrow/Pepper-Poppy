import {useRef, useState} from 'react';
import useInView from '../../hooks/useInView';

const WelcomeContent = ({content}) => {
  const el = useRef();
  const [show, setShow] = useState(false);
  useInView(el, (triggered) => {
    setShow(triggered);
  });
  return (
    <div ref={el}>{content}</div>
  )
}

export default WelcomeContent