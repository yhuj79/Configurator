import styled from "styled-components";

import MainCard from "./MainCard";

function MainContent() {

  return (
    <MainContentDiv>
      <div className="main-container">
        <MainCard
          image={require("../img/Main_Cclass.png")}
          name="C-Class"
          route="cclass"
          animationDelay={0.1}
        />
        <MainCard
          image={require("../img/Main_Amg.png")}
          name="AMG"
          route="amg"
          animationDelay={0.5}
        />
      </div>
      <div className="main-container">
        <MainCard
          image={require("../img/Main_Cla.jpg")}
          name="CLA-Class"
          route="claclass"
          animationDelay={0.9}
        />
        <MainCard
          image={require("../img/Main_Sclass.jpg")}
          name="S-Class"
          route="sclass"
          animationDelay={1.3}
        />
      </div>
    </MainContentDiv>
  );
}
const MainContentDiv = styled.div`
  width: 80%;
  margin: auto;
  overflow-x: hidden;

  .main-container {
    display: flex;
    position: relative;
  }
`;
export default MainContent;
