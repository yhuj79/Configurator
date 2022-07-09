import { useState } from "react";
import Car from "./Car";
import { ConfigureDiv, OptionDiv, Title, OpenSection, Button, Icon, TitleSpan } from "./StyledOption";

function Configure({ name, titleName, packList, colorList, wheelList }) {
  const [open, setOpen] = useState(0);
  const [pack, setPack] = useState(packList[1]);
  const [color, setColor] = useState(colorList[1]);
  const [wheel, setWheel] = useState(wheelList[1]);

  // Conditional Operate Styling
  const clicked = {
    backgroundColor: "white",
    color: "black",
  };
  const exist = {
    display: "",
  };
  const none = {
    display: "none",
  };

  return (
    <ConfigureDiv>
      <OptionDiv>
        <div>
          <Title onClick={() => setOpen(1)}>
            V8 스타일 팩
            <TitleSpan>
              {pack === packList[1] ? "기본: 선택 안함" : "+ V8 스타일 팩"}
            </TitleSpan>
          </Title>
          <OpenSection style={open === 1 ? exist : none}>
            <div style={{ margin: "15px" }}>
              <Icon alt="" src={require(`./file/source/stylingPackage.jpeg`)} />
            </div>
            <div>
              <Button
                onClick={() => setPack(packList[2])}
                style={pack === packList[2] ? clicked : {}}
              >
                O
              </Button>
              <Button
                onClick={
                  color === colorList[3]
                    ? undefined
                    : () => setPack(packList[1])
                }
                style={
                  color === colorList[3]
                    ? { opacity: "0.2" }
                    : pack === packList[1]
                    ? clicked
                    : {}
                }
              >
                X
              </Button>
            </div>
          </OpenSection>
        </div>
        <div>
          <Title onClick={() => setOpen(2)}>
            색상<TitleSpan>{color}</TitleSpan>
          </Title>
          <OpenSection style={open === 2 ? exist : none}>
            <Button
              onClick={() => setColor(colorList[1])}
              style={color === colorList[1] ? clicked : {}}
            >
              <Icon alt="" src={require(`./file/source/${colorList[1]}.webp`)} />
              <br />
              {colorList[1]}
            </Button>
            <Button
              onClick={() => setColor(colorList[2])}
              style={color === colorList[2] ? clicked : {}}
            >
              <Icon alt="" src={require(`./file/source/${colorList[2]}.webp`)} />
              <br />
              {colorList[2]}
            </Button>
            <Button
              onClick={
                pack === packList[2] ? () => setColor(colorList[3]) : undefined
              }
              style={
                pack === packList[2]
                  ? color === colorList[3]
                    ? clicked
                    : {}
                  : { opacity: "0.2" }
              }
            >
              <Icon alt="" src={require(`./file/source/${colorList[3]}.webp`)} />
              <br />
              {colorList[3]}
              <span style={pack === packList[2] ? none : { fontSize: "12px" }}>
                <br />
                (스타일팩 전용)
              </span>
            </Button>
          </OpenSection>
        </div>
        <div>
          <Title onClick={() => setOpen(3)}>
            휠
            <TitleSpan>
              {wheel === wheelList[1]
                ? `${wheelList[1]} Wheel`
                : `${wheelList[2]} Wheel`}
            </TitleSpan>
          </Title>
          <OpenSection style={open === 3 ? exist : none}>
            <Button
              onClick={() => setWheel(wheelList[1])}
              style={wheel === wheelList[1] ? clicked : {}}
            >
              <Icon alt="" src={require(`./file/source/${wheelList[1]}.webp`)} />
              <br />
              {wheelList[1]}
            </Button>
            <Button
              onClick={() => setWheel(wheelList[2])}
              style={wheel === wheelList[2] ? clicked : {}}
            >
              <Icon alt="" src={require(`./file/source/${wheelList[2]}.webp`)} />
              <br />
              {wheelList[2]}
            </Button>
          </OpenSection>
        </div>
      </OptionDiv>
      <Car
        name={name}
        titleName={titleName}
        pack={pack}
        color={color}
        wheel={wheel}
      />
    </ConfigureDiv>
  );
}
export default Configure;
