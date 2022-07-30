import styled from "styled-components";

export const OptionDiv = styled.div`
  min-width: 500px;
  max-width: 500px;
  margin: 0 0 0 15px;
  color: white;
  font-weight: bold;

  @media (max-width: 1260px) {
    min-width: 280px;
    max-width: 280px;
  }
`;

export const StylingPackage = styled.div`
  width: 60%;
  margin: 15px;
`;

export const Title = styled.h2`
  width: 85%;
  margin: 15px;
  padding: 15px;
  font-size: 18px;
  color: white;
  border-bottom: 1px solid white;
  transition: all 0.3s;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 1260px) {
    margin: 0;
  }
`;

export const TitleSpan = styled.a`
  font-size: 15px;
  line-height: 2.5;
  float: right;
  color: gray;

  @media (max-width: 1260px) {
    display: none;
  }
`;

export const OpenSection = styled.div`
  display: flex;
  margin-right: 15px;
  animation: AppearOptionButton 0.5s;
  animation-fill-mode: forwards;

  @keyframes AppearOptionButton {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 1260px) {
    display: block;
  }
`;

export const Button = styled.div`
  width: 100px;
  text-align: center;
  background-color: #2b2b2b;
  border: 2px solid white;
  border-radius: 7px;
  margin: 15px;
  padding: 15px;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1260px) {
    width: 50px;
    display: flex;
    padding-right: 150px;

    .span-stylepack {
      font-size: 9px !important;
    }
  }
`;

export const ButtonStylePackDiv = styled.div`
  @media (max-width: 1260px) {
    display: flex;
  }
`

export const ButtonStylePack = styled(Button)`
  @media (max-width: 1260px) {
    margin: 10px;
    padding-right: 15px;
    justify-content: center;
  }
`

export const Image = styled.img`
  width: 100%;

  @media (max-width: 1260px) {
    margin-right: 15px;
  }
`;
