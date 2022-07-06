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
    if (throttle === 15) {
      degree === 36 ? setDegree(1) : setDegree(degree + 1);
      setThrottle(0);
    } else {
      setDegree(degree);
    }
  }
  function degreeRight() {
    setThrottle(throttle + 1);
    if (throttle === 15) {
      degree === 1 ? setDegree(36) : setDegree(degree - 1);
      setThrottle(0);
    } else {
      setDegree(degree);
    }
  }

  return (
    <ConfigureDiv
      style={{
        backgroundImage: `url(${require("./file/CarBackground.jpeg")})`,
      }}
    >
      {/* // <ConfigureDiv> */}
      <h1 className="configure-img-title">Mercedes-AMG GT 43 4MATIC+</h1>
      <div className="configure-img-div">
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
        <img
          className="configure-img-slider-stage"
          alt=""
          src={require(`./file/CarSliderStage.png`)}
        />
      </div>
    </ConfigureDiv>
  );
}
const ConfigureDiv = styled.div`
  width: 100%;
  margin: auto;
  background-size: cover;
  border-radius: 15px;

  .configure-img-title {
    margin: 15px 40px 0;
  }
  .configure-img-div {
    position: relative;
    margin-top: 80px;
  }
  .configure-img {
    position: absolute;
    width: 100%;
    z-index: 100;
  }
  .configure-img-slider-stage {
    width: 100%;
    z-index: 1;
  }
`;
export default Configure;
