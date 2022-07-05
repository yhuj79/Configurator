import styled from "styled-components";
import { useState, useRef } from "react";

function Configure({ name, pack, color, wheel }) {
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
    if (throttle === 10) {
      degree === 36 ? setDegree(1) : setDegree(degree + 1);
      setThrottle(0);
    } else {
      setDegree(degree);
    }
  }
  function degreeRight() {
    setThrottle(throttle + 1);
    if (throttle === 10) {
      degree === 1 ? setDegree(36) : setDegree(degree - 1);
      setThrottle(0);
    } else {
      setDegree(degree);
    }
  }

  return (
    <ConfigureDiv>
      <h1>TEST</h1>
      <h1>amg-sp-polawhite-20multialloy-</h1>
      <img
        className="configure-img"
        alt=""
        ref={imgRef}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        src={require(`./file/${name}/${name}-${pack}-${color}-${wheel}-${degree}.webp`)}
      />
    </ConfigureDiv>
  );
}
const ConfigureDiv = styled.div`
  width: 85%;

  .configure-option-button {
    background-color: gray;
    border: 2px solid white;
    border-radius: 7px;
    padding: 20px;
  }
  .configure-img {
    width: 100%;
  }
`;
export default Configure;
