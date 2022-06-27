import styled from "styled-components";
import { useState } from "react";

function CClass() {
  const [degree, setDegree] = useState(1);
  const degreeLeft = () => {
    degree === 36 ? setDegree(1) : setDegree(degree + 1);
  };
  const degreeRight = () => {
    degree === 1 ? setDegree(36) : setDegree(degree - 1);
  };

  return (
    <ConfigureDiv>
      <h1>C Class [ TEST ]</h1>
      <img
        className="configure-img"
        alt=""
        src={require(`./img/cclass/cclass${degree}.webp`)}
      />
      <button className="configure-degree-button" onClick={degreeLeft}>
        &lt;&lt;
      </button>
      <button className="configure-degree-button" onClick={degreeRight}>
        &gt;&gt;
      </button>
    </ConfigureDiv>
  );
}
const ConfigureDiv = styled.div`
  width: 80%;
  margin: auto;

  .configure-img {
    width: 80%;
  }
  .configure-degree-button {
    font-size: 30px;
  }
`;
export default CClass;
