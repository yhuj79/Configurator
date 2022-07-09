import { Link } from "react-router-dom";
import styled from "styled-components";

function SClass() {
  return (
    <TestDiv>
      <h1>준비중입니다!</h1>
      <br />
      <Link to={"/"} style={{ padding: "30px" }}>
        <button className="btn">홈으로 이동</button>
      </Link>
    </TestDiv>
  );
}
const TestDiv = styled.div`
  margin: 100px;

  .btn {
    margin-left: -25px;
    padding: 20px;
    font-size: 20px;
  }
  .btn:hover {
    opacity: 0.7;
  }
`;
export default SClass;
