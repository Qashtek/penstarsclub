import "./Footer.css";
import { FaInstagram, FaSquareWhatsapp, FaRegEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">PenstarsClub</a>

          <small className="foot-message">
            We are passionate about helping you discover the wealth in your ink
            as we journey towards creating a new generation of leaders whose
            voices speak louder than the chaos in the world.
          </small>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/mindportal_penstarsclub"
              target="_blank"
            >
              <p>
                <FaInstagram />
              </p>
            </a>
            <a href="https://wa.link/78fuv7" target="_blank">
              <p>
                <FaSquareWhatsapp />
              </p>
            </a>
            <a href="mailto:minportalpenstarsclub@gmail.com">
              <p>
                <FaRegEnvelope />
              </p>
            </a>
          </div>

          <small className="foot-message">Tel: +234 906 610 5545</small>
        </div>

        <ul className="footer-links">
          <li className="app__nav-links_item">
            <a href="#about">About</a>
          </li>
          <li className="app__nav-links_item">
            <a href="#services">Offerings</a>
          </li>
          <li className="app__nav-links_item">
            <a href="#reviews">Reviews</a>
          </li>
          <li className="app__nav-links_item">
            <a href="#contact">Contact</a>
          </li>
          <li className="app__nav-links_item">
            <a
              target="_blank"
              href="https://paystack.com/buy/membership---penstars-club-knxtya?discount=PENUP5"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright p__nunito">
        &copy; 2025 Mindportal Penstars' club .
      </div>
    </div>
  );
};

export default Footer;
