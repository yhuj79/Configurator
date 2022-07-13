import styled from "styled-components";
import Logo from "../img/Logo.png";

function Footer() {
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
    </FooterDiv>
  );
}
const FooterDiv = styled.div`
  background-color: #3b3b3b;
  text-align: center;
  padding: 100px 0 100px;

  .footer-img {
    width: 60px;
    filter: brightness(250%);
  }
  .footer-img-list {
    display: flex;
    justify-content: space-around;
    opacity: 0.7;
  }
`;
export default Footer;
