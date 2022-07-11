import styled from "styled-components";

function SubTotal({ priceVanila, pricePack, priceColor, priceWheel }) {
    return (
        <SubTotalDiv>
            <p className="sub-vanila-line">{priceVanila.toLocaleString("en")} KRW</p>
            {pricePack > 0 ? (<p className="sub-option-line">스타일링 패키지 + {pricePack}</p>) : ""}
            {priceColor > 0 ? (<p className="sub-option-line">색상 + {priceColor}</p>) : ""}
            {priceWheel > 0 ? (<p className="sub-option-line">휠 +{priceWheel}</p>) : ""}
            <p className="sub-option-total">{(priceVanila + pricePack + priceColor + priceWheel).toLocaleString("en")} KRW</p>
        </SubTotalDiv>
    );
}
const SubTotalDiv = styled.div`
  bottom: 0;
  right: 0;
  position: fixed;
  background-color: #2b2b2b;
  text-align: right;
  margin: 30px; padding: 20px;
  border: 2px solid white;
  border-radius: 10px;

  .sub-vanila-line {
    font-size: 28px; text-shadow: 2px 2px 2px gray;
  }
  .sub-option-line {
    font-size: 15px;
    opacity: 0.8;
  }
  .sub-option-total {
    border-top: 2px solid white;
    margin-top: 5px; padding-top: 5px;
    font-size: 30px; text-shadow: 2px 2px 2px gray;
  }
`
export default SubTotal;