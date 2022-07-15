import styled from "styled-components";
import SlideAmg from "../img/Slide_Amg.webp";
// import SlideSclass from "../img/Slide_Sclass.webp";
// import SlideCclass from "../img/Slide_Cclass.webp";
// import SlideCla from "../img/Slide_Cla.webp";

function MainSlide() {
  return (
    <MainSlideDiv>
      <Img alt="" src={SlideAmg} />
      {/* <Img alt="" src={SlideSclass} />
      <Img alt="" src={SlideCclass} />
      <Img alt="" src={SlideCla} /> */}
    </MainSlideDiv>
  );
}
const MainSlideDiv = styled.div`
  margin: auto;
  text-align: center;
  margin-bottom: 30px;
`;
const Img = styled.img`
  width: 100%;
`;
export default MainSlide;
