import styled from "styled-components";
import { useState, useRef } from "react";

function Configure({ name }) {
  const imgRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [degree, setDegree] = useState(1);
  const [throttle, setThrottle] = useState(0);

  const [pack, setPack] = useState("nsp");
  const [color, setColor] = useState("polawhite");
  const [wheel, setWheel] = useState("20alloy");

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
      <div className="configure-option-section">
        <h1>옵션</h1>
        <div>
          <h2>V8 스타일 팩</h2>
          <div>
            <p
              className="configure-option-button"
              onClick={() => {
                setPack("sp");
              }}
            >
              YES
            </p>
            <p
              className="configure-option-button"
              onClick={() => {
                setPack("nsp");
              }}
            >
              NO
            </p>
          </div>
        </div>
        <div>
          <h2>Color</h2>
          <div>
            <p
              className="configure-option-button"
              onClick={() => {
                setColor("polawhite");
              }}
            >
              Pola White
            </p>
            <p
              className="configure-option-button"
              onClick={() => {
                setColor("black");
              }}
            >
              Obsidian Black
            </p>
            <p
              className="configure-option-button"
              onClick={() => {
                setColor("orange");
              }}
            >
              Orange
            </p>
          </div>
        </div>
        <div>
          <h2>Wheel</h2>
          <div>
            <p
              className="configure-option-button"
              onClick={() => {
                setWheel("20alloy");
              }}
            >
              20인치 AMG 5트윈 스포크 경량 알로이 휠
            </p>
            <p
              className="configure-option-button"
              onClick={() => {
                setWheel("20multialloy");
              }}
            >
              20인치 AMG 멀티 스포크 경량 알로이 휠
            </p>
          </div>
        </div>
      </div>
      <div className="configure-img-section">
        <h1>TEST</h1>
        <h1>amg-sp-polawhite-20multialloy-</h1>
        {/* <h1>{name} [ TEST ]</h1> */}
        <img
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={imgRef}
          className="configure-img"
          alt=""
          src={require(`./file/${name}/${name}-${pack}-${color}-${wheel}-${degree}.webp`)}
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
    width: 15%;
    margin-right: 35px;
  }
  .configure-option-button {
    background-color: gray;
    border: 2px solid white;
    border-radius: 7px;
    padding: 20px;
  }
  .configure-img-section {
    width: 85%;
  }
  .configure-img {
    width: 100%;
  }
`;
export default Configure;
