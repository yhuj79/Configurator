import Configure from "./configure/Configure";

function Amg() {
  const packList = {
    1: "nsp",
    2: "sp",
  };
  const colorList = {
    1: "polawhite",
    2: "black",
    3: "orange",
  };
  const wheelList = {
    1: "20alloy",
    2: "20multialloy",
  };

  return (
    <Configure
      name="amg"
      titleName={"Mercedes-AMG GT 43 4MATIC+"}
      packList={packList}
      colorList={colorList}
      wheelList={wheelList}
    />
  );
}

export default Amg;
