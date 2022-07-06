import { useState } from "react";
import Configure from "./Configure";
import { ConfigurePageDiv, Button } from "./StyledOption";

function Amg() {
  const [pack, setPack] = useState("nsp");
  const [color, setColor] = useState("polawhite");
  const [wheel, setWheel] = useState("20alloy");

  return (
    <ConfigurePageDiv>
      <div className="configure-option-section">
        <h1 className="configure-option-title">옵션</h1>
        <div>
          <h2 className="configure-option-title">V8 스타일 팩</h2>
          <div>
            <Button
              onClick={() => setPack("sp")}
              style={pack === "sp" ? { backgroundColor: "#8EA8DB" } : {}}
            >
              YES
            </Button>
            <Button
              onClick={color === "orange" ? undefined : () => setPack("nsp")}
              style={
                color === "orange"
                  ? { opacity: "0.5" }
                  : pack === "nsp"
                  ? { backgroundColor: "#8EA8DB" }
                  : {}
              }
            >
              NO
            </Button>
          </div>
        </div>
        <div>
          <h2 className="configure-option-title">색상</h2>
          <div>
            <Button
              onClick={() => setColor("polawhite")}
              style={
                color === "polawhite" ? { backgroundColor: "#8EA8DB" } : {}
              }
            >
              Pola White
            </Button>
            <Button
              onClick={() => setColor("black")}
              style={color === "black" ? { backgroundColor: "#8EA8DB" } : {}}
            >
              Obsidian Black
            </Button>
            <Button
              onClick={pack === "sp" ? () => setColor("orange") : undefined}
              style={
                pack === "sp"
                  ? color === "orange"
                    ? { backgroundColor: "#8EA8DB" }
                    : {}
                  : { opacity: "0.5" }
              }
            >
              Orange
              <span
                style={
                  pack === "sp" ? { display: "none" } : { fontSize: "13px" }
                }
              >
                {" "}
                (V8 스타일 팩 필요)
              </span>
            </Button>
          </div>
        </div>
        <div>
          <h2 className="configure-option-title">휠</h2>
          <div>
            <Button
              onClick={() => setWheel("20alloy")}
              style={wheel === "20alloy" ? { backgroundColor: "#8EA8DB" } : {}}
            >
              20인치 AMG 5트윈 스포크 경량 알로이 휠
            </Button>
            <Button
              onClick={() => setWheel("20multialloy")}
              style={
                wheel === "20multialloy" ? { backgroundColor: "#8EA8DB" } : {}
              }
            >
              20인치 AMG 멀티 스포크 경량 알로이 휠
            </Button>
          </div>
        </div>
      </div>
      <Configure name="amg" pack={pack} color={color} wheel={wheel} />
    </ConfigurePageDiv>
  );
}
export default Amg;
