import Configure from "../components/configure/Configure";

function Amg() {
  const listPack = {
    1: { name: "nsp", price: 0 },
    2: { name: "sp", price: 5940000 },
  };
  const listColor = {
    1: { name: "polawhite", price: 0 },
    2: { name: "black", price: 0 },
    3: { name: "orange", price: 10050000 },
  };
  const listWheel = {
    1: { name: "20alloy", price: 0 },
    2: { name: "20multialloy", price: 1030000 },
  };
  const listCover = {
    1: { name: "NapaBlack", price: 0 },
    2: { name: "NapaBrown", price: 6250000 },
    3: { name: "NapaRed", price: 5430000 },
  };
  const listTrim = {
    1: { name: "BlackPiano", price: 0 },
    2: { name: "Carbon", price: 6040000 },
  };
  const listSteering = {
    1: { name: "Napa", price: 0 },
    2: { name: "Dinamica", price: 870000 },
  };

  return (
    <Configure
      name="amg"
      titleName={"AMG GT 43 4MATIC+"}
      priceVanila={137600000}
      listPack={listPack}
      listColor={listColor}
      listWheel={listWheel}
      listCover={listCover}
      listTrim={listTrim}
      listSteering={listSteering}
    />
  );
}

export default Amg;
