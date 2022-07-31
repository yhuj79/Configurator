import "./Header.scss";
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
    <header className="header-div">
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
    </header>
  );
}
export default Header;
