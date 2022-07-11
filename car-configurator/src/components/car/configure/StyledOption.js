import styled from "styled-components";

export const ConfigureDiv = styled.div`
  display: flex;
  margin: auto;
  font-size: 18px;
  background-color: #2b2b2b;
`;

export const OptionDiv = styled.div`
  width: 50%;
  margin: 0 auto 0;
  color: white;
  font-weight: bold;
`;

export const Title = styled.h2`
  width: 85%;
  margin: 15px;
  padding: 15px;
  color: white;
  border-bottom: 1px solid white;
  transition: all 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;

export const TitleSpan = styled.a`
  font-size: 18px;
  line-height: 2;
  float: right;
  color: gray;
`

export const OpenSection = styled.div`
  display: flex;
  margin-right: 15px;
  animation: AppearOptionButton 0.5s;
  animation-fill-mode: forwards;

  @keyframes AppearOptionButton {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Button = styled.div`
  background-color: #2b2b2b;
  border: 2px solid white;
  border-radius: 7px;
  margin: 15px;
  padding: 15px;
  transition: all 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;

export const Icon = styled.img`
  width: 100%;
`;
