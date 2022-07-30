import styled from "styled-components";

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
    <SubTotalDiv>
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
    </SubTotalDiv>
  );
}
const SubTotalDiv = styled.div`
  display: flex;
  width: 95%;
  height: 110px;
  background-color: #3b3b3b;
  margin: 20px auto;
  padding: 15px;
  border: 2px solid #939393;
  border-radius: 10px;

  .sub-section-one {
    margin: auto;
  }
  .sub-section-two {
    border-right: 2px solid white;
    padding-right: 15px;
  }
  .sub-section-thr {
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 15px;
  }

  .sub-title {
    font-size: 30px;
    text-shadow: 2px 2px 2px gray;
  }
  .sub-line-option {
    font-size: 15px;
    text-align: right;
    opacity: 0.8;
  }
  .sub-line-price {
    font-size: 20px;
    text-align: right;
    text-shadow: 2px 2px 2px gray;
  }
  .sub-line-price-total {
    font-size: 23px;
    text-shadow: 2px 2px 2px gray;
  }

  @media (max-width: 1260px) {
    .sub-title {
      font-size: 20px;
    }
    .sub-line-option {
      font-size: 12px;
    }
    .sub-line-price {
      font-size: 17px;
    }
    .sub-line-price-total {
      font-size: 20px;
    }
  }
`;
export default SubTotal;
