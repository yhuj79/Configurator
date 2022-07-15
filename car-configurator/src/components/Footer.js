import styled from "styled-components";
import Logo from "../img/Logo.png";

import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';

function Footer() {
  const iconStyle = {
    fontSize: "30px",
    margin: "30px",
    color: "white"
  };

  return (
    <FooterDiv>
      <img className="footer-img" alt="" src={Logo} />
      <div className="footer-img-list">
        <p>Provider</p>
        <p>Legal Notice</p>
        <p>Cookies</p>
        <p>Privacy Statement</p>
        <p>Newsfeed (RSS)</p>
        <p>Contact</p>
        <p>Careers</p>
        <p>Investor Relations</p>
      </div>
      <div className="footer-img-list">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/mercedesbenz"
        >
          <Twitter sx={iconStyle} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/MercedesBenz"
        >
          <Facebook sx={iconStyle} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/mercedesbenzkr"
        >
          <Instagram sx={iconStyle} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/mercedesbenztv"
        >
          <YouTube sx={iconStyle} />
        </a>
      </div>
    </FooterDiv>
  );
}
const FooterDiv = styled.div`
  background-color: #3b3b3b;
  text-align: center;
  padding: 50px 0 30px;

  .footer-img {
    width: 60px;
    filter: brightness(250%);
  }
  .footer-img-list {
    display: flex;
    justify-content: center;
    opacity: 0.7;
  }
  .footer-img-list p {
    margin: 20px 50px 20px;
  }
`;
export default Footer;
