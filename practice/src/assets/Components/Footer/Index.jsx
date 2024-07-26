import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <p className="footer__icons__p1"></p>
        <a
          href="https://www.linkedin.com/in/m-hamza-waqar-58b9b5240"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="footer__icons__linkedin" />
        </a>

        <a
          href="https://www.instagram.com/hamzarajpoot3912/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="footer__icons__instagram" />
        </a>

        <a
          href="https://wa.me/3366776269"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="footer__icons__whatsapp" />
        </a>

        <a
          href="https://www.facebook.com/hamza.waqar.7399"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="footer__icons__facebook" />
        </a>
        <p className="footer__icons__p2"></p>
      </div>

      <div className="footer__content">
        <h3 className="footer__content__text">Thanks for Scrolling </h3>
      </div>
    </div>
  );
};

export default Footer;
