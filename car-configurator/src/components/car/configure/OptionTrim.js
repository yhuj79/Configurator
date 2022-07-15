import { Title, TitleSpan, OpenSection, Button, Image } from "./styledOption";

function OptionTrim({
  open,
  setOpen,
  styleClicked,
  trim,
  setTrim,
  listTrim,
  setPriceTrim,
  Select,
}) {
  return (
    <div>
      <Title
        onClick={() => setOpen(5)}
        style={open === 5 ? { fontSize: "25px" } : { display: "" }}
      >
        트림<TitleSpan>{trim}</TitleSpan>
      </Title>
      <OpenSection style={open === 5 ? { display: "" } : { display: "none" }}>
        <Button
          onClick={() => Select(setTrim, listTrim, setPriceTrim, 1)}
          style={trim === listTrim[1].name ? styleClicked : {}}
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
          style={trim === listTrim[2].name ? styleClicked : {}}
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
  );
}

export default OptionTrim;
