import styled from "styled-components";

function MainSlideImg({ src, titleOne, titleTwo, titleMini }) {
  return (
    <MainSlideImgDiv>
      <img
        className="slide-img"
        alt=""
        src={require(`../img/Slide_${src}.webp`)}
      />
      <div className="slide-text">
        <p className="slide-text-one">{titleOne}</p>
        <p className="slide-text-two">{titleTwo}</p>
        <p className="slide-text-mini">{titleMini}</p>
      </div>
    </MainSlideImgDiv>
  );
}
const MainSlideImgDiv = styled.div`
  .slide-text {
    position: absolute;
    font-family: "Playfair Display", serif;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
    top: 5%;
    left: 3%;
  }
  .slide-text-one {
    opacity: 0;
    animation: AppearSlideTitle 1s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
    font-size: 35px;
  }
  .slide-text-two {
    opacity: 0;
    animation: AppearSlideTitle 1s;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
    font-size: 45px;
  }
  .slide-text-mini {
    opacity: 0;
    animation: AppearSlideTitle 1s;
    animation-delay: 1.3s;
    animation-fill-mode: forwards;
    font-size: 18px;
  }

  @keyframes AppearSlideTitle {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export default MainSlideImg;
