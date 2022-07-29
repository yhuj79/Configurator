import { Title, TitleSpan, OpenSection, Button, Image } from "./Option.style";

function OptionCover({
  open,
  setOpen,
  styleClicked,
  cover,
  setCover,
  listCover,
  setPriceCover,
  Select,
}) {
  return (
    <div>
      <Title
        onClick={() => setOpen(4)}
        style={open === 4 ? { fontSize: "25px" } : { display: "" }}
      >
        시트 커버<TitleSpan>{cover}</TitleSpan>
      </Title>
      <OpenSection style={open === 4 ? { display: "" } : { display: "none" }}>
        <Button
          onClick={() => Select(setCover, listCover, setPriceCover, 1)}
          style={cover === listCover[1].name ? styleClicked : {}}
        >
          <Image
            src={require(`../file/source/${listCover[1].name}.webp`)}
            alt=""
          />
          <br />
          {listCover[1].name}
        </Button>
        <Button
          onClick={() => Select(setCover, listCover, setPriceCover, 2)}
          style={cover === listCover[2].name ? styleClicked : {}}
        >
          <Image
            src={require(`../file/source/${listCover[2].name}.webp`)}
            alt=""
          />
          <br />
          {listCover[2].name}
        </Button>
        <Button
          onClick={() => Select(setCover, listCover, setPriceCover, 3)}
          style={cover === listCover[3].name ? styleClicked : {}}
        >
          <Image
            src={require(`../file/source/${listCover[3].name}.webp`)}
            alt=""
          />
          <br />
          {listCover[3].name}
        </Button>
      </OpenSection>
    </div>
  );
}

export default OptionCover;
