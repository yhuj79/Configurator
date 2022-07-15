import { useState } from "react";
import Car from "./Car";
import InteriorSide from "./InteriorSide";
import InteriorFront from "./InteriorFront";
import SubTotal from "./SubTotal";
import { ConfigureDiv, OptionDiv } from "./styledOption";
import OptionStylePack from "./OptionStylePack";
import OptionColor from "./OptionColor";
import OptionWheel from "./OptionWheel";
import OptionCover from "./OptionCover";
import OptionTrim from "./OptionTrim";
import OptionSteering from "./OptionSteering";

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
  const styleClicked = {
    backgroundColor: "white",
    color: "black",
  };

  return (
    <ConfigureDiv>
      <OptionDiv>
        <OptionStylePack
          open={open}
          setOpen={setOpen}
          styleClicked={styleClicked}
          pack={pack}
          setPack={setPack}
          listPack={listPack}
          setPricePack={setPricePack}
          color={color}
          listColor={listColor}
          Select={Select}
        />
        <OptionColor
          open={open}
          setOpen={setOpen}
          styleClicked={styleClicked}
          color={color}
          setColor={setColor}
          listColor={listColor}
          setPriceColor={setPriceColor}
          pack={pack}
          listPack={listPack}
          Select={Select}
        />
        <OptionWheel
          open={open}
          setOpen={setOpen}
          styleClicked={styleClicked}
          wheel={wheel}
          setWheel={setWheel}
          listWheel={listWheel}
          setPriceWheel={setPriceWheel}
          Select={Select}
        />
        <OptionCover
          open={open}
          setOpen={setOpen}
          styleClicked={styleClicked}
          cover={cover}
          setCover={setCover}
          listCover={listCover}
          setPriceCover={setPriceCover}
          Select={Select}
        />
        <OptionTrim
          open={open}
          setOpen={setOpen}
          styleClicked={styleClicked}
          trim={trim}
          setTrim={setTrim}
          listTrim={listTrim}
          setPriceTrim={setPriceTrim}
          Select={Select}
        />
        <OptionSteering
          open={open}
          setOpen={setOpen}
          styleClicked={styleClicked}
          steering={steering}
          setSteering={setSteering}
          listSteering={listSteering}
          setPriceSteering={setPriceSteering}
          Select={Select}
        />
        {/* <button style={{padding: "30px"}}>기본 옵션으로 초기화</button> */}
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
