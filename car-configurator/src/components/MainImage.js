import styled from "styled-components";

import MainImageOne from "../img/Main_Cclass.png";
import MainImageTwo from "../img/Main_Amg.png";
import MainImageThree from "../img/Main_Cla.jpg";
import MainImageFour from "../img/Main_Sclass.jpg";

function MainImage() {
  return (
    <MainImageDiv>
      <div style={{ display: "flex" }}>
        <img className="main-img1" alt="" src={MainImageOne} />
        <img className="main-img2" alt="" src={MainImageTwo} />
      </div>
      <div style={{ display: "flex" }}>
        <img className="main-img3" alt="" src={MainImageThree} />
        <img className="main-img4" alt="" src={MainImageFour} />
      </div>
    </MainImageDiv>
  );
}
const MainImageDiv = styled.div`
  width: 90%;
  margin: auto;

  .main-img1, .main-img2, .main-img3, .main-img4 {
    width: 50%;
    margin-bottom: 16px;
    margin-left: -6px;
    margin-right: 24px;
  }

  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .main-img1 {
    animation: smoothAppear 1s;
  }
  .main-img2 {
    animation: smoothAppear 4s;
  }
  .main-img3 {
    animation: smoothAppear 7s;
  }
  .main-img4 {
    animation: smoothAppear 10s;
  }
`;
export default MainImage;
