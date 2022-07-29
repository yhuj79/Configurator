import { Title, TitleSpan, OpenSection, Button, Image } from "./Option.style";

function OptionSteering({
  open,
  setOpen,
  styleClicked,
  steering,
  setSteering,
  listSteering,
  setPriceSteering,
  Select,
}) {
  return (
    <div>
      <Title
        onClick={() => setOpen(6)}
        style={open === 6 ? { fontSize: "25px" } : { display: "" }}
      >
        스티어링 휠<TitleSpan>{steering}</TitleSpan>
      </Title>
      <OpenSection style={open === 6 ? { display: "" } : { display: "none" }}>
        <Button
          onClick={() => Select(setSteering, listSteering, setPriceSteering, 1)}
          style={steering === listSteering[1].name ? styleClicked : {}}
        >
          <Image
            src={require(`../file/source/${listSteering[1].name}.webp`)}
            alt=""
          />
          <br />
          {listSteering[1].name}
        </Button>
        <Button
          onClick={() => Select(setSteering, listSteering, setPriceSteering, 2)}
          style={steering === listSteering[2].name ? styleClicked : {}}
        >
          <Image
            src={require(`../file/source/${listSteering[2].name}.webp`)}
            alt=""
          />
          <br />
          {listSteering[2].name}
        </Button>
      </OpenSection>
    </div>
  );
}

export default OptionSteering;
