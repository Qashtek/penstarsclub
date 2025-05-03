import "./About.css";
import { images } from "../../constants";

const About = () => {
  return (
    <div className="app__about section__padding" id="about">
      <div className="app__about-img">
        <img src={images.dev1} alt="bulb" />
      </div>

      <div className="app__about-content">
        <div className="app__about-content_heading">
          <p className="subtext white">Get to know us</p>
          <h1 className="headtext2 text__gradient">Who we are</h1>
        </div>

        <div className="app__about-content_info">
          <p className="p__nunito">
            The Penstars' club is an organized community of passionate writers
            who are actively making a difference in their world through rigorous
            club activities and a learning curve that proves more effective than
            the traditional schooling system. The Penstars' club is one of the
            initiatives of Mindportal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
