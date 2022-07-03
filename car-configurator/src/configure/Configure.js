import styled from "styled-components";
import { useState, useRef } from "react";

function Configure({ name }) {
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
      <div className="configure-option-section">
        <h1>옵션</h1>
        <div>
          <h2>color</h2>
          <div>
            <p>color 1</p>
            <p>color 2</p>
            <p>color 3</p>
          </div>
        </div>
        <div>
          <h2>wheel</h2>
          <div>
            <p>wheel 1</p>
            <p>wheel 2</p>
            <p>wheel 3</p>
          </div>
        </div>
      </div>
      <div className="configure-img-section">
        <h1>{name} [ TEST ]</h1>
        <img
          onMouseDown={onDragStart}
          onMouseMove={onThrottleDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
          className="configure-img"
          alt=""
          src={require(`./img/${name}/${name}${degree}.webp`)}
        />
      </div>
    </ConfigureDiv>
  );
}
const ConfigureDiv = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  font-size: 20px;

  .configure-option-section {
    width: 10%;
  }
  .configure-img-section {
    width: 90%;
  }
  .configure-img {
    width: 100%;
  }
`;
export default Configure;
