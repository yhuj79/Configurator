import { Title, TitleSpan, OpenSection, Button, Image } from "./Option.style";

function OptionColor({
  open,
  setOpen,
  styleClicked,
  color,
  setColor,
  listColor,
  setPriceColor,
  pack,
  listPack,
  Select,
}) {
  function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  return (
    <div>
      <Title
        onClick={() => setOpen(2)}
        style={open === 2 ? { fontSize: "25px" } : { display: "" }}
      >
        색상<TitleSpan>{jsUcfirst(color)}</TitleSpan>
      </Title>
      <OpenSection style={open === 2 ? { display: "" } : { display: "none" }}>
        <Button
          onClick={() => Select(setColor, listColor, setPriceColor, 1)}
          style={color === listColor[1].name ? styleClicked : {}}
        >
          <Image
            src={require(`../file/source/${listColor[1].name}.webp`)}
            alt=""
          />
          <br />
          {jsUcfirst(listColor[1].name)}
        </Button>
        <Button
          onClick={() => Select(setColor, listColor, setPriceColor, 2)}
          style={color === listColor[2].name ? styleClicked : {}}
        >
          <Image
            src={require(`../file/source/${listColor[2].name}.webp`)}
            alt=""
          />
          <br />
          {jsUcfirst(listColor[2].name)}
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
                ? styleClicked
                : {}
              : { opacity: "0.2" }
          }
        >
          <Image
            src={require(`../file/source/${listColor[3].name}.webp`)}
            alt=""
          />
          <br />
          {jsUcfirst(listColor[3].name)}
          <span
            style={
              pack === listPack[2].name
                ? { display: "none" }
                : { fontSize: "12px" }
            }
          >
            <br />
            (스타일팩 전용)
          </span>
        </Button>
      </OpenSection>
    </div>
  );
}

export default OptionColor;
