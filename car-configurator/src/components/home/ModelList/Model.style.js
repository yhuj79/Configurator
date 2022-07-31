import styled from "styled-components";

export const ModelDiv = styled.div`
  width: 50%;
  margin: 0 8px 16px;
  opacity: 0;
  animation: AppearSmooth 1.2s;
  animation-fill-mode: forwards;

  .model-img {
    width: 100%;
    opacity: 0.7;
    transition: all 0.5s;
  }
  .delay-loaded,
  .model-configure-button {
    text-decoration: none;
    position: absolute;
    top: 5%;
    right: -20%;
    opacity: 0;
  }
  .model-configure-button {
    right: -10%;
    color: black;
    font-size: 20px;
    transition: all 0.3s;
  }
  .css-i4bv87-MuiSvgIcon-root {
    // SettingsIcon
    font-size: 25px;
    margin-bottom: -5px;
  }
  .model-text-section {
    position: absolute;
    bottom: 5%;
    left: 3%;
  }
  .model-text-title {
    font-family: "Playfair Display", serif;
    font-size: 35px;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
    opacity: 0;
    animation: AppearSmooth 1.2s;
    animation-delay: 1.6s;
    animation-fill-mode: forwards;
    transition: all 0.3s;
  }

  &:hover > .model-img {
    opacity: 1;
    transition: all 0.5s;
  }
  &:hover > .model-configure-button {
    color: white;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid white;
    opacity: 1;
    right: 3%;
    transition: all 0.3s;
  }
  &:hover .model-text-title {
    font-size: 50px;
    transition: all 0.3s;
  }

  @keyframes AppearSmooth {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
