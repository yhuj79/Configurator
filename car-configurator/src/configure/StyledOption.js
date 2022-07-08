import styled from "styled-components";

export const ConfigurePageDiv = styled.div`
  display: flex;
  margin: auto;
  font-size: 18px;

  .configure-option-section {
    width: 50%;
    margin: auto;
    color: white;
  }
  .configure-option-title {
    width: 85%;
    margin: 15px;
    padding: 15px;
    color: white;
    border-bottom: 1px solid white;
    transition: all 1s;
  }
`;

export const Button = styled.div`
  width: 80%;
  background-color: black;
  border: 2px solid white;
  border-radius: 7px;
  margin: 15px;
  padding: 15px;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
