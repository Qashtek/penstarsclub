import "./Brands.css";
import { images } from "../../constants";

const Brands = () => {
  return (
    <div className="app__brands section__padding">
      <div className="app__brands-item">
        <img src={images.qashtek} alt="qash teknologies logo" />
      </div>{" "}
      |
      <div className="app__brands-item">
        <img src={images.paystack} alt="paystack logo" />
      </div>{" "}
      |
      <div className="app__brands-item">
        <img src={images.atlassian} alt="atlassian logo" />
      </div>{" "}
      |
      <div className="app__brands-item">
        <img src={images.slack} alt="slack logo" />
      </div>
    </div>
  );
};

export default Brands;
