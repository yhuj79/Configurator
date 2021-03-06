import { useEffect, useState } from "react";
import "./Slide.scss";
import SlideImg from "./SlideImg";

function Slide() {
  const [imgNum, setImgNum] = useState(1);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      SlideRight();
    }, 7000);
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
    <div className="slide-div">
      <div className={imgNum === 1 ? "slide-img" : "none"}>
        <SlideImg
          src="Amg"
          titleOne="The all-new"
          titleTwo="Mercedes-AMG GT 4-Door Coupé."
        />
      </div>
      <div className={imgNum === 2 ? "slide-img" : "none"}>
        <SlideImg
          src="Sclass"
          titleOne="The new"
          titleTwo="S-Class."
          titleMini="Cares for what matters."
        />
      </div>
      <div className={imgNum === 3 ? "slide-img" : "none"}>
        <SlideImg
          src="Cclass"
          titleOne="The new"
          titleTwo="C-Class."
          titleMini="Stay in your comfort zone."
        />
      </div>
      <div className={imgNum === 4 ? "slide-img" : "none"}>
        <SlideImg
          src="Cla"
          titleTwo="The CLA."
          titleMini="Automotive intelligence can be this beautiful."
        />
      </div>
      <button onClick={() => SlideLeft()}>{"<"}</button>
      <button onClick={() => SlideRight()}>{">"}</button>
    </div>
  );
}
export default Slide;
