import styled from "styled-components";
import Header from "./components/Header";
import MainImageOne from "./img/Main1.png";

function App() {
  return (
    <div className="App">
      <Header />
      <MainImage alt="" src={MainImageOne} />
      <div>1 메인사진</div>
      <div>2 차 종류</div>
      <div>2 하단바</div>
    </div>
  );
}

const MainImage = styled.img`
  width: 100%;
`
export default App;
