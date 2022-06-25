import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SettingsIcon from "@mui/icons-material/Settings";

function MainCard({ image, name, animationDelay }) {
  const [delay, setDelay] = useState("delay-loaded");
  setTimeout(() => setDelay("card-configure-button"), 1700);

  return (
    <MainCardDiv style={{ animationDelay: `${animationDelay}s` }}>
      <img className="card-img" alt="" src={image} />
      <Link to={"/test"} className={delay}>
          <SettingsIcon /> Configure
      </Link>
      <div className="card-text-section">
        <p className="card-text-title">{name}</p>
      </div>
    </MainCardDiv>
  );
}
const MainCardDiv = styled.div`
  width: 50%;
  margin: 0 8px 16px;
  opacity: 0;
  animation: AppearSmooth 1.2s;
  animation-fill-mode: forwards;

  .card-img {
    width: 100%;
    opacity: 0.7;
    transition: all 0.5s;
  }
  .delay-loaded, .card-configure-button {
    text-decoration: none;
    position: absolute;
    top: 5%;
    right: -20%;
    opacity: 0;
  }
  .card-configure-button {
    right: -10%;
    color: black;
    font-size: 20px;
    transition: all 0.3s;
  }
  .css-i4bv87-MuiSvgIcon-root { // SettingsIcon
    font-size: 25px;
    margin-bottom: -5px;
  }
  .card-text-section {
    position: absolute;
    bottom: 5%;
    left: 3%;
  }
  .card-text-title {
    font-family: "Playfair Display", serif;
    font-size: 35px;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
    opacity: 0;
    animation: AppearSmooth 1.2s;
    animation-delay: 1.3s;
    animation-fill-mode: forwards;
    transition: all 0.3s;
  }

  &:hover > .card-img {
    opacity: 1;
    transition: all 0.5s;
  }
  &:hover > .card-configure-button {
    color: white;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid white;
    opacity: 1;
    right: 3%;
    transition: all 0.3s;
  }
  &:hover .card-text-title {
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
export default MainCard;
