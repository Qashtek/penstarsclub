import "./Header.css";
import { images } from "../../constants";

const Header = () => {
  return (
    <div className="app__header section__padding">
      <div className="app__header-content">
        <h4 className="subtext white">50% discount for membership access</h4>
        <h1 className="headtext text__gradient header__h1">
          Discover Leadership by literature.
        </h1>
        <p className="p__nunito">
          We are passionate about helping you discover the wealth in your ink as
          we journey towards creating a new generation of leaders whose voices
          speak louder than the chaos in the world.
        </p>

        <a
          target="_blank"
          className="custom__btn"
          href="https://paystack.com/buy/membership---penstars-club-knxtya?discount=PENUP5"
        >
          Get Started
        </a>
      </div>

      <div className="app__header-img ">
        <img src={images.blackman} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
