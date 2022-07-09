import { useState } from "react";
import Configure from "./Configure";
import {
  ConfigurePageDiv,
  OptionDiv,
  Title,
  OpenSection,
  Button,
  Icon,
  TitleSpan,
} from "./StyledOption";

function Amg() {
  const [pack, setPack] = useState("nsp");
  const [color, setColor] = useState("polawhite");
  const [wheel, setWheel] = useState("20alloy");

  const [open, setOpen] = useState(0);

  return (
    <ConfigurePageDiv>
      <OptionDiv>
        <div>
          <Title onClick={() => setOpen(1)}>V8 스타일 팩<TitleSpan>기본 : 선택 안함</TitleSpan></Title>
          <OpenSection
            style={open === 1 ? { display: "" } : { display: "none" }}
          >
            <div style={{ margin: "15px" }}>
              <Icon alt="" src={require(`./file/icon/stylingPackage.jpeg`)} />
            </div>
            <div>
              <Button
                onClick={() => setPack("sp")}
                style={
                  pack === "sp"
                    ? { backgroundColor: "white", color: "black" }
                    : {}
                }
              >
                O
              </Button>
              <Button
                onClick={color === "orange" ? undefined : () => setPack("nsp")}
                style={
                  color === "orange"
                    ? { opacity: "0.2" }
                    : pack === "nsp"
                    ? { backgroundColor: "white", color: "black" }
                    : {}
                }
              >
                X
              </Button>
            </div>
          </OpenSection>
        </div>
        <div>
          <Title onClick={() => setOpen(2)}>색상</Title>
          <OpenSection
            style={open === 2 ? { display: "" } : { display: "none" }}
          >
            <Button
              onClick={() => setColor("polawhite")}
              style={
                color === "polawhite"
                  ? { backgroundColor: "white", color: "black" }
                  : {}
              }
            >
              <Icon alt="" src={require(`./file/icon/polawhite.webp`)} />
              <br />
              Pola White
            </Button>
            <Button
              onClick={() => setColor("black")}
              style={
                color === "black"
                  ? { backgroundColor: "white", color: "black" }
                  : {}
              }
            >
              <Icon alt="" src={require(`./file/icon/black.webp`)} />
              <br />
              Obsidian Black
            </Button>
            <Button
              onClick={pack === "sp" ? () => setColor("orange") : undefined}
              style={
                pack === "sp"
                  ? color === "orange"
                    ? { backgroundColor: "white", color: "black" }
                    : {}
                  : { opacity: "0.2" }
              }
            >
              <Icon alt="" src={require(`./file/icon/orange.webp`)} />
              <br />
              Orange
              <span
                style={
                  pack === "sp" ? { display: "none" } : { fontSize: "12px" }
                }
              >
                <br />
                (스타일팩 전용)
              </span>
            </Button>
          </OpenSection>
        </div>
        <div>
          <Title onClick={() => setOpen(3)}>휠</Title>
          <OpenSection
            style={open === 3 ? { display: "" } : { display: "none" }}
          >
            <Button
              onClick={() => setWheel("20alloy")}
              style={
                wheel === "20alloy"
                  ? { backgroundColor: "white", color: "black" }
                  : {}
              }
            >
              <Icon alt="" src={require(`./file/icon/20alloy.webp`)} />
              <br />
              20인치 AMG 5트윈 스포크 경량 알로이 휠
            </Button>
            <Button
              onClick={() => setWheel("20multialloy")}
              style={
                wheel === "20multialloy"
                  ? { backgroundColor: "white", color: "black" }
                  : {}
              }
            >
              <Icon alt="" src={require(`./file/icon/20multialloy.webp`)} />
              <br />
              20인치 AMG 멀티 스포크 경량 알로이 휠
            </Button>
          </OpenSection>
        </div>
      </OptionDiv>
      <Configure name="amg" pack={pack} color={color} wheel={wheel} />
    </ConfigurePageDiv>
  );
}
export default Amg;
