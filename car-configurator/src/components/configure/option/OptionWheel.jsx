import { Title, TitleSpan, OpenSection, Button, Image } from "./Option.style";

function OptionWheel({
  open,
  setOpen,
  styleClicked,
  wheel,
  setWheel,
  listWheel,
  setPriceWheel,
  Select,
}) {
  return (
    <div>
      <Title
        onClick={() => setOpen(3)}
        style={open === 3 ? { fontSize: "25px" } : { display: "" }}
      >
        휠
        <TitleSpan>
          {wheel === listWheel[1].name
            ? `${listWheel[1].name} Wheel`
            : `${listWheel[2].name} Wheel`}
        </TitleSpan>
      </Title>
      <OpenSection style={open === 3 ? { display: "" } : { display: "none" }}>
        <Button
          onClick={() => Select(setWheel, listWheel, setPriceWheel, 1)}
          style={wheel === listWheel[1].name ? styleClicked : {}}
        >
          <Image
            src={require(`../file/source/${listWheel[1].name}.webp`)}
            alt=""
          />
          <br />
          {listWheel[1].name}
        </Button>
        <Button
          onClick={() => Select(setWheel, listWheel, setPriceWheel, 2)}
          style={wheel === listWheel[2].name ? styleClicked : {}}
        >
          <Image
            src={require(`../file/source/${listWheel[2].name}.webp`)}
            alt=""
          />
          <br />
          {listWheel[2].name}
        </Button>
      </OpenSection>
    </div>
  );
}

export default OptionWheel;
