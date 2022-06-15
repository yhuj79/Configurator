import React from "react";
import styled from "styled-components";
import Logo from "../img/Logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";

function Header() {
  const iconStyle = {
    margin: "30px 35px 0",
    color: "white",
  };

  return (
    <HeaderDiv>
      <div>
        <MenuIcon sx={iconStyle} />
        <InsertPhotoIcon sx={iconStyle} />
      </div>
      <div className="header-logo">
        <img className="header-img" alt="" src={Logo} />
        <p>Mercedes-Benz</p>
      </div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/mercedesbenztv"
        >
          <YouTubeIcon sx={iconStyle} />
        </a>
        <LanguageIcon sx={iconStyle} />
      </div>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: lighter;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 0 10px;
  letter-spacing: 1px;
  font-family: "Courier New", "Courier", "monospace";

  .header-logo {
    text-align: center;
  }
  .header-img {
    width: 60px;
    filter: brightness(250%);
  }
`;

export default Header;
