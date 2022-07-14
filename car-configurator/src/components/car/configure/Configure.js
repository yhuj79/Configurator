import { useState } from "react";
import Car from "./Car";
import InteriorSide from "./InteriorSide";
import InteriorFront from "./InteriorFront";
import SubTotal from "./SubTotal";
import {
  ConfigureDiv,
  OptionDiv,
  Title,
  TitleSpan,
  OpenSection,
  Button,
  Image,
  StylingPackage,
} from "./StyledOption";

function Configure({
  name,
  titleName,
  priceVanila,
  listPack,
  listColor,
  listWheel,
  listCover,
  listTrim,
  listSteering,
}) {
  const [open, setOpen] = useState(1);
  const [pack, setPack] = useState(listPack[1].name);
  const [color, setColor] = useState(listColor[1].name);
  const [wheel, setWheel] = useState(listWheel[1].name);
  const [cover, setCover] = useState(listCover[1].name);
  const [trim, setTrim] = useState(listTrim[1].name);
  const [steering, setSteering] = useState(listSteering[1].name);

  const [pricePack, setPricePack] = useState(0);
  const [priceColor, setPriceColor] = useState(0);
  const [priceWheel, setPriceWheel] = useState(0);
  const [priceCover, setPriceCover] = useState(0);
  const [priceTrim, setPriceTrim] = useState(0);
  const [priceSteering, setPriceSteering] = useState(0);

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
          <Title
            onClick={() => setOpen(1)}
            style={open === 1 ? { fontSize: "25px" } : exist}
          >
            스타일링 패키지
            <TitleSpan>
              {pack === listPack[1].name ? "기본: 선택 안함" : "+ V8 스타일 팩"}
            </TitleSpan>
          </Title>
          <OpenSection style={open === 1 ? exist : none}>
            <StylingPackage>
              <Image
                src={require(`./file/source/stylingPackage.jpeg`)}
                style={{ borderRadius: "10px" }}
                alt=""
              />
            </StylingPackage>
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
          <Title
            onClick={() => setOpen(2)}
            style={open === 2 ? { fontSize: "25px" } : exist}
          >
            색상<TitleSpan>{color}</TitleSpan>
          </Title>
          <OpenSection style={open === 2 ? exist : none}>
            <Button
              onClick={() => Select(setColor, listColor, setPriceColor, 1)}
              style={color === listColor[1].name ? clicked : {}}
            >
              <Image
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
              <Image
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
              <Image
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
          <Title
            onClick={() => setOpen(3)}
            style={open === 3 ? { fontSize: "25px" } : exist}
          >
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
              <Image
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
              <Image
                src={require(`./file/source/${listWheel[2].name}.webp`)}
                alt=""
              />
              <br />
              {listWheel[2].name}
            </Button>
          </OpenSection>
        </div>
        <div>
          <Title
            onClick={() => setOpen(4)}
            style={open === 4 ? { fontSize: "25px" } : exist}
          >
            시트 커버<TitleSpan>{cover}</TitleSpan>
          </Title>
          <OpenSection style={open === 4 ? exist : none}>
            <Button
              onClick={() => Select(setCover, listCover, setPriceCover, 1)}
              style={cover === listCover[1].name ? clicked : {}}
            >
              <Image
                src={require(`./file/source/${listCover[1].name}.webp`)}
                alt=""
              />
              <br />
              {listCover[1].name}
            </Button>
            <Button
              onClick={() => Select(setCover, listCover, setPriceCover, 2)}
              style={cover === listCover[2].name ? clicked : {}}
            >
              <Image
                src={require(`./file/source/${listCover[2].name}.webp`)}
                alt=""
              />
              <br />
              {listCover[2].name}
            </Button>
            <Button
              onClick={() => Select(setCover, listCover, setPriceCover, 3)}
              style={cover === listCover[3].name ? clicked : {}}
            >
              <Image
                src={require(`./file/source/${listCover[3].name}.webp`)}
                alt=""
              />
              <br />
              {listCover[3].name}
            </Button>
          </OpenSection>
        </div>
        <div>
          <Title
            onClick={() => setOpen(5)}
            style={open === 5 ? { fontSize: "25px" } : exist}
          >
            트림<TitleSpan>{trim}</TitleSpan>
          </Title>
          <OpenSection style={open === 5 ? exist : none}>
            <Button
              onClick={() => Select(setTrim, listTrim, setPriceTrim, 1)}
              style={trim === listTrim[1].name ? clicked : {}}
            >
              <Image
                src={require(`./file/source/${listTrim[1].name}.webp`)}
                alt=""
              />
              <br />
              {listTrim[1].name}
            </Button>
            <Button
              onClick={() => Select(setTrim, listTrim, setPriceTrim, 2)}
              style={trim === listTrim[2].name ? clicked : {}}
            >
              <Image
                src={require(`./file/source/${listTrim[2].name}.webp`)}
                alt=""
              />
              <br />
              {listTrim[2].name}
            </Button>
          </OpenSection>
        </div>
        <div>
          <Title
            onClick={() => setOpen(6)}
            style={open === 6 ? { fontSize: "25px" } : exist}
          >
            스티어링 휠<TitleSpan>{steering}</TitleSpan>
          </Title>
          <OpenSection style={open === 6 ? exist : none}>
            <Button
              onClick={() =>
                Select(setSteering, listSteering, setPriceSteering, 1)
              }
              style={steering === listSteering[1].name ? clicked : {}}
            >
              <Image
                src={require(`./file/source/${listSteering[1].name}.webp`)}
                alt=""
              />
              <br />
              {listSteering[1].name}
            </Button>
            <Button
              onClick={() =>
                Select(setSteering, listSteering, setPriceSteering, 2)
              }
              style={steering === listSteering[2].name ? clicked : {}}
            >
              <Image
                src={require(`./file/source/${listSteering[2].name}.webp`)}
                alt=""
              />
              <br />
              {listSteering[2].name}
            </Button>
          </OpenSection>
        </div>
      </OptionDiv>
      <div>
        <SubTotal
          titleName={titleName}
          priceVanila={priceVanila}
          pricePack={pricePack}
          priceColor={priceColor}
          priceWheel={priceWheel}
          priceCover={priceCover}
          priceTrim={priceTrim}
          priceSteering={priceSteering}
        />
        <div>
          {open < 4 ? (
            <Car
              name={name}
              titleName={titleName}
              pack={pack}
              color={color}
              wheel={wheel}
            />
          ) : open === 4 ? (
            <InteriorSide cover={cover} trim={trim} steering={steering} />
          ) : (
            <InteriorFront cover={cover} trim={trim} steering={steering} />
          )}
        </div>
      </div>
    </ConfigureDiv>
  );
}
export default Configure;
