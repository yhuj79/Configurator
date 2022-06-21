import styled from "styled-components";

import MainImageOne from "../img/Main_Cclass.png";
import MainImageTwo from "../img/Main_Amg.png";
import MainImageThree from "../img/Main_Cla.jpg";
import MainImageFour from "../img/Main_Sclass.jpg";

function MainContent() {
  return (
    <MainContentDiv>
      <div className="main-container">
        <div className="main-img-section1">
          <img className="main-img1" alt="" src={MainImageOne} />
          <div className="main-text">
            <p className="main-text-title1">C-Class</p>
          </div>
        </div>
        <div className="main-img-section2">
          <img className="main-img2" alt="" src={MainImageTwo} />
          <div className="main-text">
            <p className="main-text-title2">AMG</p>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="main-img-section3">
          <img className="main-img3" alt="" src={MainImageThree} />
          <div className="main-text">
            <p className="main-text-title3">CLA-Class</p>
          </div>
        </div>
        <div className="main-img-section4">
          <img className="main-img4" alt="" src={MainImageFour} />
          <div className="main-text">
            <p className="main-text-title4">S-Class</p>
          </div>
        </div>
      </div>
    </MainContentDiv>
  );
}
const MainContentDiv = styled.div`
  width: 80%;
  margin: auto;

  .main-container {
    display: flex;
    position: relative;
  }
  .main-img-section1,
  .main-img-section2,
  .main-img-section3,
  .main-img-section4 {
    width: 50%;
    margin: 0 8px 16px;
    opacity: 0;
    animation: AppearSmooth 1.2s;
    animation-fill-mode: forwards;
  }
  .main-img1,
  .main-img2,
  .main-img3,
  .main-img4 {
    width: 100%;
    transition: all 0.5s;
  }
  .main-img-section1:hover > .main-img1,
  .main-img-section2:hover > .main-img2,
  .main-img-section3:hover > .main-img3,
  .main-img-section4:hover > .main-img4 {
    opacity: 0.7;
    transition: all 0.5s;
  }
  .main-text {
    position: absolute;
    bottom: 5%; left: 3%;
  }
  .main-text-title1,
  .main-text-title2,
  .main-text-title3,
  .main-text-title4 {
    font-family: 'Playfair Display', serif;
    font-size: 35px;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
    opacity: 0;
    animation: AppearSmooth 1.2s;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
    transition: all 0.3s;
  }
  .main-img-section1:hover .main-text-title1,
  .main-img-section2:hover .main-text-title2,
  .main-img-section3:hover .main-text-title3,
  .main-img-section4:hover .main-text-title4 {
    font-size: 50px;
    transition: all 0.3s;
  }

  @keyframes AppearSmooth {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .main-img-section1 {
    animation-delay: 1.5s;
  }
  .main-img-section2 {
    animation-delay: 2s;
  }
  .main-img-section3 {
    animation-delay: 2.5s;
  }
  .main-img-section4 {
    animation-delay: 3s;
  }
`;
export default MainContent;
