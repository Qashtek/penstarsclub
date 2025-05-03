import { useState } from "react";
import "./Nav.css";
// import Logo from "../../assets/Logo.png";
import { FaInstagram, FaSquareWhatsapp, FaRegEnvelope } from "react-icons/fa6";
import { FiWind, FiX } from "react-icons/fi";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__nav">
      <div className="app__nav-logo">
        <a href="/">PenstarsClub</a>
      </div>

      <ul className="app__nav-links">
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
          <a href="/">Get Started</a>
        </li>
      </ul>

      <div className="app__nav-socials">
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
        <a href="mailto:mindportalpenstarsclub@gmail.com">
          <p>
            <FaRegEnvelope />
          </p>
        </a>
      </div>

      {/* mobile menu */}
      <div className="app__nav-mobile">
        <div className="app__nav-overlay">
          <div className="app__nav-icons">
            {toggleMenu ? (
              <FiX onClick={() => setToggleMenu(false)} />
            ) : (
              <FiWind onClick={() => setToggleMenu(true)} />
            )}
          </div>
          {toggleMenu && (
            <ul className="app__nav-mobile_links">
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
                <a href="#">Contact</a>
              </li>
              <li className="app__nav-links_item">
                <a href="/">Get Started</a>
              </li>

              <div className="app__nav-mobile_socials">
                <a href="https://instagram.com/qashteknologies">
                  <p>
                    <FaInstagram />
                  </p>
                </a>

                <a href="https://wa.link/tcl2g4">
                  <p>
                    <FaSquareWhatsapp />
                  </p>
                </a>
                <a href="mailto:qashteknologies@gmail.com">
                  <p>
                    <FaRegEnvelope />
                  </p>
                </a>
              </div>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
