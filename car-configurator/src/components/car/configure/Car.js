import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

function Car({ name, pack, color, wheel }) {
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
    if (throttle === 12) {
      degree === 36 ? setDegree(1) : setDegree(degree + 1);
      setThrottle(0);
    } else {
      setDegree(degree);
    }
  }
  function degreeRight() {
    setThrottle(throttle + 1);
    if (throttle === 12) {
      degree === 1 ? setDegree(36) : setDegree(degree - 1);
      setThrottle(0);
    } else {
      setDegree(degree);
    }
  }
  useEffect(
    () =>
      function () {
        setTimeout(() => setDegree(32), 1600);
        setTimeout(() => setDegree(33), 1650);
        setTimeout(() => setDegree(34), 1700);
        setTimeout(() => setDegree(35), 1750);
        setTimeout(() => setDegree(36), 1800);
        setTimeout(() => setDegree(1), 1850);
      },
    []
  );

  return (
    <CarDiv
      style={{
        backgroundImage: `url(${require("./file/source/CarBackground.png")})`,
      }}
    >
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
    </CarDiv>
  );
}
const CarDiv = styled.div`
  width: 100%;
  margin: auto;
  background-size: cover;
  animation: AppearContent 0.8s;
  animation-fill-mode: forwards;
  position: relative;

  .car-img-title {
    padding: 15px 25px;
    text-shadow: 2px 2px 2px gray;
  }
  .car-img {
    position: absolute;
    width: 100%;
    z-index: 100;

    animation: AppearCar 1.5s;
    animation-fill-mode: forwards;

    @keyframes AppearCar {
      from {
        transform: translateX(-250%);
      }
      to {
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
