import "./ModelList.scss";
import Model from "./Model";

function ModelList() {

  return (
    <div className="model-list-div">
      <div className="model-list-section">
        <Model
          image={require("./img/Model_Amg.png")}
          name="AMG"
          route="amg"
          animationDelay={0.1}
        />
        <Model
          image={require("./img/Model_Sclass.png")}
          name="S-Class"
          route="sclass"
          animationDelay={0.5}
        />
      </div>
      <div className="model-list-section">
        <Model
          image={require("./img/Model_Cla.png")}
          name="CLA-Class"
          route="claclass"
          animationDelay={0.9}
        />
        <Model
          image={require("./img/Model_Cclass.png")}
          name="C-Class"
          route="cclass"
          animationDelay={1.3}
        />
      </div>
    </div>
  );
}
export default ModelList;
