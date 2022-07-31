import "./Interior.scss";

function InteriorSide({ cover, trim, steering }) {
  return (
    <div
      className="interior-div"
      style={{
        backgroundImage: `url(${require(`./file/amg/amg-${cover}-${trim}-${steering}.webp`)})`,
      }}
    >
      <div className="interior-img-div">
        <img
          className="interior-img-slider-stage"
          alt=""
          src={require(`./file/source/CarSliderStage.png`)}
        />
      </div>
    </div>
  );
}
export default InteriorSide;
