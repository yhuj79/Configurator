import { useState } from "react";
import styled from "styled-components";

function MainSlide() {
  const [imgNum, setImgNum] = useState(1);
  // setInterval(function () {
  //   imgNum === 4 ? setImgNum(1) : setImgNum(imgNum + 1);
  // }, 2000);

  return (
    <MainSlideDiv>
      <img
        className="slide-img"
        alt=""
        src={require(`../img/Slide-${imgNum}.webp`)}
      />
      <p className="slide-title">
        The all-new
        <br />
        Mercedes-AMG GT 4-Door Coupé
      </p>
    </MainSlideDiv>
  );
}
const MainSlideDiv = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
  margin-bottom: 30px;

  .slide-img {
    width: 100%;
  }
  .slide-title {
    position: absolute;
    font-family: "Playfair Display", serif;
    font-size: 40px;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
    top: 5%;
    left: 3%;
  }
`;
export default MainSlide;
