import "./SlideImg.scss";

function SlideImg({ src, titleOne, titleTwo, titleMini }) {
  return (
    <div>
      <img
        className="slide-img"
        alt=""
        src={require(`./img/Slide_${src}.webp`)}
      />
      <div className="slide-text-div">
        <p className="slide-text-one">{titleOne}</p>
        <p className="slide-text-two">{titleTwo}</p>
        <p className="slide-text-mini">{titleMini}</p>
      </div>
    </div>
  );
}
export default SlideImg;
