import styled from "styled-components";
import { useState, useRef } from "react";

function CClass() {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [degree, setDegree] = useState(1);

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth < clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }

      if (startX - e.pageX > 0) {
        degree === 36 ? setDegree(1) : setDegree(degree + 1);
      } else if (startX - e.pageX < 0) {
        degree === 1 ? setDegree(36) : setDegree(degree - 1);
      }
    }
  };

  const delay = 60;
  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <ConfigureDiv>
      <h1>C Class [ TEST ]</h1>
      <img
        onMouseDown={onDragStart}
        onMouseMove={onThrottleDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
        className="configure-img"
        alt=""
        src={require(`./img/cclass/cclass${degree}.webp`)}
      />
    </ConfigureDiv>
  );
}
const ConfigureDiv = styled.div`
  width: 80%;
  margin: auto;

  .configure-img {
    width: 80%;
  }
  .configure-degree-button {
    font-size: 30px;
  }
`;
export default CClass;
