import Configure from "./configure/Configure";

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

  return (
    <Configure
      name="amg"
      titleName={"Mercedes-AMG GT 43 4MATIC+"}
      priceVanila={137600000}
      listPack={listPack}
      listColor={listColor}
      listWheel={listWheel}
    />
  );
}

export default Amg;
