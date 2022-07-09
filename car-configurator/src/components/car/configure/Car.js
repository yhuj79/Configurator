import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

function Car({ name, titleName, pack, color, wheel }) {
  const imgRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [degree, setDegree] = useState(31);
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
  useEffect(
    () =>
      function () {
        setTimeout(() => setDegree(32), 1100);
        setTimeout(() => setDegree(33), 1150);
        setTimeout(() => setDegree(34), 1200);
        setTimeout(() => setDegree(35), 1250);
        setTimeout(() => setDegree(36), 1300);
        setTimeout(() => setDegree(1), 1350);
      },
    []
  );

  return (
    <CarDiv
      style={{
        backgroundImage: `url(${require("./file/source/CarBackground.jpeg")})`,
      }}
    >
      <h1 className="car-img-title">{titleName}</h1>
      <div className="car-img-div">
        <img
          className="car-img"
          alt=""
          ref={imgRef}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          src={require(`./file/${name}/${name}-${pack}-${color}-${wheel}-${degree}.webp`)}
        />
        <img
          className="car-img-slider-stage"
          alt=""
          src={require(`./file/source/CarSliderStage.png`)}
        />
      </div>
    </CarDiv>
  );
}
const CarDiv = styled.div`
  width: 100%;
  margin: auto;
  background-size: cover;

  .car-img-title {
    margin: 25px 40px 0;
    text-shadow: 2px 2px 2px gray;
  }
  .car-img-div {
    position: relative;
    margin-top: 120px;
  }
  .car-img {
    position: absolute;
    width: 100%;
    z-index: 100;
    transition: all 0.7s;

    animation: AppearCar 1s;
    animation-fill-mode: forwards;

    @keyframes AppearCar {
      from {
        opacity: 0;
        transform: translateX(-200%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
  .car-img-slider-stage {
    width: 100%;
    z-index: 1;
  }
`;
export default Car;
