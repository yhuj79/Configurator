import styled from "styled-components";
import Logo from "../img/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";

function Header() {
  const iconStyle = {
    fontSize: "30px",
    margin: "30px 40px 0",
    color: "white",
  };

  return (
    <HeaderDiv>
      <div className="header-icon">
        <MenuIcon sx={iconStyle} />
        <InsertPhotoIcon sx={iconStyle} />
      </div>
      <div className="header-logo">
        <img className="header-img" alt="" src={Logo} />
        <p>Mercedes-Benz</p>
      </div>
      <div className="header-icon">
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
  padding: 30px 0 30px 5px;
  letter-spacing: 1px;
  font-family: "Courier New", "Courier", "monospace";

  .header-logo {
    text-align: center;
    opacity: 0;
    animation: AppearNormal 0.7s;
    animation-delay: 0.7s;
    animation-fill-mode: forwards;
  }
  .header-img {
    width: 60px;
    filter: brightness(250%);
  }
  .header-icon {
    opacity: 0;
    animation: AppearNormal 0.7s;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
  }

  @keyframes AppearNormal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export default Header;
