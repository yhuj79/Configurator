import styled from "styled-components";
import Model from "./Model";

function ModelList() {

  return (
    <ModelListDiv>
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
    </ModelListDiv>
  );
}
const ModelListDiv = styled.div`
  width: 80%;
  margin: auto;
  padding-bottom: 100px;
  overflow-x: hidden;

  .model-list-section {
    display: flex;
    position: relative;
  }
`;
export default ModelList;
