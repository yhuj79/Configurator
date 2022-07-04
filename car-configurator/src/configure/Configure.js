import styled from "styled-components";
import { useState, useRef } from "react";

function Configure({ name }) {
  const imgRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [degree, setDegree] = useState(1);
  const [throttle, setThrottle] = useState(0);

  function onDragStart(e) {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + imgRef.current.scrollLeft);
  }

  function onDragEnd() {
    setIsDrag(false);
  }

  function onDragMove(e) {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = imgRef.current;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth < clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }

      if (startX - e.pageX > 0) {
        setThrottle(0);
        degreeLeft();
      } else if (startX - e.pageX < 0) {
        setThrottle(0);
        degreeRight();
      }
    }
  }

  function degreeLeft() {
    setThrottle(throttle + 1);
    if (throttle === 20) {
      degree === 36 ? setDegree(1) : setDegree(degree + 1);
      setThrottle(0);
    }
    else {
      setDegree(degree);
    }
  }
  function degreeRight() {
    setThrottle(throttle + 1);
    if (throttle === 20) {
      degree === 1 ? setDegree(36) : setDegree(degree - 1);
      setThrottle(0);
    }
    else {
      setDegree(degree);
    }
  }

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
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={imgRef}
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
