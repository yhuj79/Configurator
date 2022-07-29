import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";

function Header() {
  const iconStyle = {
    fontSize: "30px",
    color: "white",
  };

  return (
    <HeaderDiv>
      <div className="header-icon-div">
        <div className="header-icon">
          <MenuIcon sx={iconStyle} />
        </div>
        <div className="header-icon">
          <InsertPhotoIcon sx={iconStyle} />
        </div>
      </div>
      <Link to="/" className="header-logo">
        <img className="header-img" alt="" src={Logo} />
        <p>Mercedes-Benz</p>
      </Link>
      <div className="header-icon-div">
        <div className="header-icon">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/mercedesbenztv"
          >
            <YouTubeIcon sx={iconStyle} />
          </a>
        </div>
        <div className="header-icon">
          <LanguageIcon sx={iconStyle} />
        </div>
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
    text-decoration: none;
    color: white;
    text-align: center;
    opacity: 0;
    animation: AppearNormal 1.2s;
    animation-delay: 1.6s;
    animation-fill-mode: forwards;
  }
  .header-img {
    width: 60px;
    filter: brightness(250%);
  }
  .header-icon-div {
    display: flex;
    opacity: 0;
    animation: AppearNormal 1.2s;
    animation-delay: 1.6s;
    animation-fill-mode: forwards;
  }
  .header-icon {
    margin: 30px;
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
