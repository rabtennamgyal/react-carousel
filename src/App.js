import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import one from './img/deer dusk.jpg';
import two from './img/night watch.png';
import three from './img/sunset.jpg';
import { useRef } from 'react';

function App() {
  const a = useRef(one);
  const b = useRef(two);
  const c = useRef(three);

  const arr = [a, b, c];
  let cur = 0;
  let max = arr.length;


  const slideLeft = () => {
    if (cur === 0) {
      cur = max - 1;
    } else {
      cur--;
    };

    arr.forEach((el, i) => {
      el.current.style.transform = `translateX(${100 * (i - cur)}%)`;
    });
  }

  const slideRight = () => {
    if (cur === max - 1) {
      cur = 0;
    } else {
      cur++;
    };

    arr.forEach((el, i) => {
      el.current.style.transform = `translateX(${100 * (i - cur)}%)`;
    });
  };

  return (
    <div className="app">
      <div className="btnBoxLeft" onClick={slideLeft}>
        <FontAwesomeIcon id='left' icon={faArrowLeft} className='btn'></FontAwesomeIcon>
      </div>

      <div className="carousel">
        <img id='imgOne' ref={a} src={one} alt='img' />
        <img id='imgTwo' ref={b} src={two} alt='img' />
        <img id='imgThree' ref={c} src={three} alt='img' />
      </div>

      <div className="btnBoxRight" onClick={slideRight}>
        <FontAwesomeIcon icon={faArrowRight} className='btn'></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default App;
