import { useState } from "react";
import Car from "./Car";
import Interior from "./Interior";
import SubTotal from "./SubTotal";
import { ConfigureDiv, OptionDiv, Title, TitleSpan, OpenSection, Button, Icon } from "./StyledOption";

function Configure({ name, titleName, priceVanila, listPack, listColor, listWheel }) {
  const [open, setOpen] = useState(0);
  const [pack, setPack] = useState(listPack[1].name);
  const [color, setColor] = useState(listColor[1].name);
  const [wheel, setWheel] = useState(listWheel[1].name);

  const [pricePack, setPricePack] = useState(0);
  const [priceColor, setPriceColor] = useState(0);
  const [priceWheel, setPriceWheel] = useState(0);

  function Select(set, list, setPriceName, num) {
    set(list[num].name);
    setPriceName(list[num].price);
  }

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
            스타일링 패키지
            <TitleSpan>
              {pack === listPack[1].name ? "기본: 선택 안함" : "+ V8 스타일 팩"}
            </TitleSpan>
          </Title>
          <OpenSection style={open === 1 ? exist : none}>
            <div style={{ margin: "15px", width: "50%" }}>
              <Icon src={require(`./file/source/stylingPackage.jpeg`)} alt="" />
            </div>
            <div>
              <Button
                onClick={() => Select(setPack, listPack, setPricePack, 2)}
                style={pack === listPack[2].name ? clicked : {}}
              >
                O
              </Button>
              <Button
                onClick={
                  color === listColor[3].name
                    ? undefined
                    : () => Select(setPack, listPack, setPricePack, 1)
                }
                style={
                  color === listColor[3].name
                    ? { opacity: "0.2" }
                    : pack === listPack[1].name
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
              onClick={() => Select(setColor, listColor, setPriceColor, 1)}
              style={color === listColor[1].name ? clicked : {}}
            >
              <Icon
                src={require(`./file/source/${listColor[1].name}.webp`)}
                alt=""
              />
              <br />
              {listColor[1].name}
            </Button>
            <Button
              onClick={() => Select(setColor, listColor, setPriceColor, 2)}
              style={color === listColor[2].name ? clicked : {}}
            >
              <Icon
                src={require(`./file/source/${listColor[2].name}.webp`)}
                alt=""
              />
              <br />
              {listColor[2].name}
            </Button>
            <Button
              onClick={
                pack === listPack[2].name
                  ? () => Select(setColor, listColor, setPriceColor, 3)
                  : undefined
              }
              style={
                pack === listPack[2].name
                  ? color === listColor[3].name
                    ? clicked
                    : {}
                  : { opacity: "0.2" }
              }
            >
              <Icon
                src={require(`./file/source/${listColor[3].name}.webp`)}
                alt=""
              />
              <br />
              {listColor[3].name}
              <span
                style={pack === listPack[2].name ? none : { fontSize: "12px" }}
              >
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
              {wheel === listWheel[1].name
                ? `${listWheel[1].name} Wheel`
                : `${listWheel[2].name} Wheel`}
            </TitleSpan>
          </Title>
          <OpenSection style={open === 3 ? exist : none}>
            <Button
              onClick={() => Select(setWheel, listWheel, setPriceWheel, 1)}
              style={wheel === listWheel[1].name ? clicked : {}}
            >
              <Icon
                src={require(`./file/source/${listWheel[1].name}.webp`)}
                alt=""
              />
              <br />
              {listWheel[1].name}
            </Button>
            <Button
              onClick={() => Select(setWheel, listWheel, setPriceWheel, 2)}
              style={wheel === listWheel[2].name ? clicked : {}}
            >
              <Icon
                src={require(`./file/source/${listWheel[2].name}.webp`)}
                alt=""
              />
              <br />
              {listWheel[2].name}
            </Button>
          </OpenSection>
        </div>
        <div>
          <Title onClick={() => setOpen(4)}>
            시트커버<TitleSpan></TitleSpan>
          </Title>
          <OpenSection style={open === 4 ? exist : none}>
            <Button>test seat cover</Button>
          </OpenSection>
        </div>
        <div>
          <Title onClick={() => setOpen(5)}>
            트림<TitleSpan></TitleSpan>
          </Title>
          <OpenSection style={open === 5 ? exist : none}>
            <Button>test trim</Button>
          </OpenSection>
        </div>
        <div>
          <Title onClick={() => setOpen(6)}>
            스티어링 휠<TitleSpan></TitleSpan>
          </Title>
          <OpenSection style={open === 6 ? exist : none}>
            <Button>test steering wheel</Button>
          </OpenSection>
        </div>
      </OptionDiv>
      <div>
        {open < 4 ? (
          <Car
            name={name}
            titleName={titleName}
            pack={pack}
            color={color}
            wheel={wheel}
          />
        ) : (
          <Interior titleName={titleName} />
        )}
      </div>
      <SubTotal
        priceVanila={priceVanila}
        pricePack={pricePack}
        priceColor={priceColor}
        priceWheel={priceWheel}
      />
    </ConfigureDiv>
  );
}
export default Configure;
