import { useEffect, useState } from "react";
import styled from "styled-components";
import MainSlideImg from "./MainSlideImg";

function MainSlide() {
  const [imgNum, setImgNum] = useState(1);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      SlideRight();
    }, 5000);
    return () => {
      clearInterval(imageInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgNum]);

  function SlideLeft() {
    if (imgNum === 1) {
      setImgNum(4);
    } else {
      setImgNum(imgNum - 1);
    }
  }

  function SlideRight() {
    if (imgNum === 4) {
      setImgNum(1);
    } else {
      setImgNum(imgNum + 1);
    }
  }

  return (
    <MainSlideDiv>
      <div className={imgNum === 1 ? "slide-img" : "none"}>
        <MainSlideImg
          src="Amg"
          titleOne="The all-new"
          titleTwo="Mercedes-AMG GT 4-Door Coupé."
        />
      </div>
      <div className={imgNum === 2 ? "slide-img" : "none"}>
        <MainSlideImg
          src="Sclass"
          titleOne="The new"
          titleTwo="S-Class."
          titleMini="Cares for what matters."
        />
      </div>
      <div className={imgNum === 3 ? "slide-img" : "none"}>
        <MainSlideImg
          src="Cclass"
          titleOne="The new"
          titleTwo="C-Class."
          titleMini="Stay in your comfort zone."
        />
      </div>
      <div className={imgNum === 4 ? "slide-img" : "none"}>
        <MainSlideImg
          src="Cla"
          titleTwo="The CLA."
          titleMini="Automotive intelligence can be this beautiful."
        />
      </div>
      <button onClick={() => SlideLeft()}>{"<"}</button>
      <button onClick={() => SlideRight()}>{">"}</button>
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
    animation: AppearSlideImg 0.8s;
  }
  .none {
    display: none;
  }

  @keyframes AppearSlideImg {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export default MainSlide;
