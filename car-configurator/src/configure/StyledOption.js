import styled from "styled-components";

export const ConfigurePageDiv = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  font-size: 18px;

  .configure-option-section {
    width: 50%;
    margin: 0 auto auto;
    color: black;
  }
  .configure-option-title {
    margin-top: 15px;
    color: white;
  }
`;

export const Button = styled.div`
  width: 75%;
  background-color: #BFCEDE;
  border: 2px solid white;
  border-radius: 7px;
  padding: 15px;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
