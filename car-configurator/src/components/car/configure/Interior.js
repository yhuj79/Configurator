import styled from "styled-components";

function Interior({ titleName }) {
  return (
    <InteriorDiv style={{
      backgroundImage: `url(${require(`./file/amg/amg-NapaBlack-BlackPiano-Napa.webp`)})`,
    }}>
      <h1 className="interior-img-title">{titleName}</h1>
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

  .interior-img-title {
    padding: 15px 25px;
    text-shadow: 2px 2px 2px gray;
  }
  .interior-img-div {
    position: relative;
  }
  .interior-img {
    position: absolute;
    width: 100%;
    z-index: 100;
    transition: all 0.7s;
  }
  .interior-img-slider-stage {
    width: 100%;
    z-index: 1;
    opacity: 0;
  }
`;
export default Interior;
