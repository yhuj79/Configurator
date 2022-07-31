import "./SubTotal.scss";

function SubTotal({
  titleName,
  priceVanila,
  pricePack,
  priceColor,
  priceWheel,
  priceCover,
  priceTrim,
  priceSteering,
}) {
  return (
    <div className="subtotal-div">
      <div className="sub-section-one">
        <h1 className="sub-title">{titleName}</h1>
      </div>
      <div className="sub-section-two">
        {pricePack > 0 ? (
          <p className="sub-line-option">
            스타일링 패키지 + {pricePack.toLocaleString("en")}
          </p>
        ) : (
          ""
        )}
        {priceColor > 0 ? (
          <p className="sub-line-option">
            색상 + {priceColor.toLocaleString("en")}
          </p>
        ) : (
          ""
        )}
        {priceWheel > 0 ? (
          <p className="sub-line-option">
            휠 +{priceWheel.toLocaleString("en")}
          </p>
        ) : (
          ""
        )}
        {priceCover > 0 ? (
          <p className="sub-line-option">
            시트 커버 +{priceCover.toLocaleString("en")}
          </p>
        ) : (
          ""
        )}
        {priceTrim > 0 ? (
          <p className="sub-line-option">
            트림 +{priceTrim.toLocaleString("en")}
          </p>
        ) : (
          ""
        )}
        {priceSteering > 0 ? (
          <p className="sub-line-option">
            스티어링 휠 +{priceSteering.toLocaleString("en")}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="sub-section-thr">
        <p className="sub-line-price">최종 금액</p>
        <p className="sub-line-price-total">
          {(
            priceVanila +
            pricePack +
            priceColor +
            priceWheel +
            priceCover +
            priceTrim +
            priceSteering
          ).toLocaleString("en")}{" "}
          KRW
        </p>
      </div>
    </div>
  );
}
export default SubTotal;
