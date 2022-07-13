import styled from "styled-components";

function InteriorSide({cover, trim, steering}) {
  return (
    <InteriorDiv style={{
      backgroundImage: `url(${require(`./file/amg/amg-${cover}-${trim}-${steering}.webp`)})`,
    }}>
      <div className="interior-img-div">
        <img
          className="interior-img-slider-stage"
          alt=""
          src={require(`./file/source/CarSliderStage.png`)}
        />
      </div>
    </InteriorDiv>
  );
}
const InteriorDiv = styled.div`
  width: 100%;
  margin: auto;
  background-size: cover;
  animation: AppearContent 0.8s;
  animation-fill-mode: forwards;

  @keyframes AppearContent {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .interior-img-slider-stage {
    width: 100%;
    opacity: 0;
  }
`;
export default InteriorSide;
