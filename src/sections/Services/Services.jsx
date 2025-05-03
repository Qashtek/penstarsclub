import "./Services.css";
import { images } from "../../constants";

const Services = () => {
  return (
    <div className="app__services section__padding" id="services">
      <div className="app__Services-header">
        <p className="subtext">What we offer</p>
        <h1 className="headtext2">Our Services</h1>
      </div>

      <div className="app__services-content">
        {/* web design and development */}
        <div className="app__services-content_item">
          <div className="app__services-content_item_info">
            <h3 className="headtext3">Talent scouting & Development</h3>
            <p className="p__nunito">
              We are committed to finding the most talented African writers,
              groom them and equip them to become leaders in their world.
            </p>
          </div>
          <div className="app__services-content_item_img">
            <img src={images.writer} alt="web app" />
          </div>
        </div>

        <div className="app__services-content_item">
          <div className="app__services-content_item_img">
            <img src={images.talent} alt="Mobile app" />
          </div>
          <div className="app__services-content_item_info">
            <h3 className="headtext3">Talent Monetization</h3>
            <p className="p__nunito">
              In today's economic-driven world, your talent is your access to a
              wealth of financial resources if properly harnessed under the
              right circumstances. We provide a safe platform for your talent to
              be nurtured into becoming a wealth dome where countless
              generations after you will benefit from.
            </p>
          </div>
        </div>

        <div className="app__services-content_item">
          <div className="app__services-content_item_info">
            <h3 className="headtext3">Book publishing</h3>
            <p className="p__nunito">
              We have a team of skilled editors and proof-readers who are
              passionate about helping writers take their craft beyond borders
              through the Penstarsclub publishing Platform.
            </p>
          </div>
          <div className="app__services-content_item_img">
            <img src={images.publishing} alt="custom software" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
