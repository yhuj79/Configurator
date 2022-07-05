import styled from "styled-components";
import { useState } from "react";
import Configure from "./Configure";

function Amg() {
  const [pack, setPack] = useState("nsp");
  const [color, setColor] = useState("polawhite");
  const [wheel, setWheel] = useState("20alloy");

  return (
    <ConfigureAmgDiv>
      <div className="configure-option-section">
        <h1>옵션</h1>
        <div>
          <h2>V8 스타일 팩</h2>
          <div>
            <p className="configure-option-button" onClick={() => { setPack("sp"); }} >YES</p>
            <p className="configure-option-button"
              onClick={(color === "orange") ? {} : (() => { setPack("nsp"); })}
              style={(color === "orange") ? {opacity: "0.7"}: {}}
            >NO
            </p>
          </div>
        </div>
        <div>
          <h2>Color</h2>
          <div>
            <p className="configure-option-button" onClick={() => { setColor("polawhite"); }}>Pola White</p>
            <p className="configure-option-button" onClick={() => { setColor("black"); }}>Obsidian Black</p>
            <p className="configure-option-button"
              onClick={(pack === "sp") ? (() => { setColor("orange"); }) : {}}
              style={(pack === "sp") ? {}: {opacity: "0.7"}}
            >
              Orange<span style={(pack === "sp") ? {display: "none"}: {}}> (V8 스타일 팩 필요)</span>
            </p>
          </div>
        </div>
        <div>
          <h2>Wheel</h2>
          <div>
            <p className="configure-option-button" onClick={() => { setWheel("20alloy"); }} style={(wheel === "20alloy") ? {backgroundColor: "green"} : {}}>
              20인치 AMG 5트윈 스포크 경량 알로이 휠
            </p>
            <p className="configure-option-button" onClick={() => { setWheel("20multialloy"); }} style={(wheel === "20multialloy") ? {backgroundColor: "green"} : {}}>
              20인치 AMG 멀티 스포크 경량 알로이 휠
            </p>
          </div>
        </div>
      </div>
      <Configure name="amg" pack={pack} color={color} wheel={wheel} />
    </ConfigureAmgDiv>
  );
}
const ConfigureAmgDiv = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  font-size: 20px;

  .configure-option-button {
    background-color: gray;
    border: 2px solid white;
    border-radius: 7px;
    padding: 20px;
  }
`;
export default Amg;
