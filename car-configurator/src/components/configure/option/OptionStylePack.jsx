import { Title, TitleSpan, OpenSection, ButtonStylePackDiv, ButtonStylePack, Image, StylingPackage, } from "./Option.style";

function OptionStylePack({
  open,
  setOpen,
  styleClicked,
  pack,
  setPack,
  listPack,
  setPricePack,
  color,
  listColor,
  Select,
}) {
  return (
    <div>
      <Title
        onClick={() => setOpen(1)}
        style={open === 1 ? { fontSize: "25px" } : { display: "" }}
      >
        스타일링 패키지
        <TitleSpan>
          {pack === listPack[1].name ? "기본: 선택 안함" : "+ V8 스타일 팩"}
        </TitleSpan>
      </Title>
      <OpenSection style={open === 1 ? { display: "" } : { display: "none" }}>
        <StylingPackage>
          <Image
            src={require(`../file/source/stylingPackage.jpeg`)}
            style={{ borderRadius: "10px" }}
            alt=""
          />
        </StylingPackage>
        <ButtonStylePackDiv>
          <ButtonStylePack
            onClick={() => Select(setPack, listPack, setPricePack, 2)}
            style={pack === listPack[2].name ? styleClicked : {}}
          >
            O
          </ButtonStylePack>
          <ButtonStylePack
            onClick={
              color === listColor[3].name
                ? undefined
                : () => Select(setPack, listPack, setPricePack, 1)
            }
            style={
              color === listColor[3].name
                ? { opacity: "0.2" }
                : pack === listPack[1].name
                ? styleClicked
                : {}
            }
          >
            X
          </ButtonStylePack>
        </ButtonStylePackDiv>
      </OpenSection>
    </div>
  );
}

export default OptionStylePack;
