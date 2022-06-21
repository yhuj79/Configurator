import styled from "styled-components";

import MainCard from "./MainCard";

function MainContent() {
  return (
    <MainContentDiv>
      <div className="main-container">
        <MainCard
          image={require("../img/Main_Cclass.png")}
          name="C-Class"
          delayTime={1.5}
        />
        <MainCard
          image={require("../img/Main_Amg.png")}
          name="AMG"
          delayTime={2.0}
        />
      </div>
      <div className="main-container">
        <MainCard
          image={require("../img/Main_Cla.jpg")}
          name="CLA-Class"
          delayTime={2.5}
        />
        <MainCard
          image={require("../img/Main_Sclass.jpg")}
          name="S-Class"
          delayTime={3.0}
        />
      </div>
    </MainContentDiv>
  );
}
const MainContentDiv = styled.div`
  width: 80%;
  margin: auto;

  .main-container {
    display: flex;
    position: relative;
  }
`;
export default MainContent;
