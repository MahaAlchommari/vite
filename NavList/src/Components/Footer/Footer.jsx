// Footer.js
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookMessenger,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import img12 from "../../assets/img/Group 1000001807.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="fooerPone">
        <div className="oneFooter">
          <img src={img12} alt="logo" />
          <p>Travel helps companies manage payments easily.</p>
          <div className="fontAw">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faFacebookMessenger} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <div className="lineTwo">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Pricing</p>
        </div>
        <div className="lineTwo lol">
          <h3>Destinations</h3>
          <p>Maldives</p>
          <p>Los Angelas</p>
          <p>Las Vegas</p>
          <p>Torronto</p>
        </div>
      </div>
      <div className="fooertPtwo">
        <p>Copyright @ Xpro 2023 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
