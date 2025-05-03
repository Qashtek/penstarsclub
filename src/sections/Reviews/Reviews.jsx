import { useState } from "react";
import "./Reviews.css";
import { data } from "../../constants";
import { LuArrowBigLeftDash, LuArrowBigRightDash } from "react-icons/lu";

const Reviews = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // go back to prev slide
  const goBack = () => {
    setSlideIndex((index) => {
      return index === 0 ? data.testimonials.length - 1 : index - 1;
    });
  };
  // go to the next slide
  const goForward = () => {
    setSlideIndex((index) => {
      return index === data.testimonials.length - 1 ? 0 : index + 1;
    });
  };

  return (
    // testimonials card -jsx
    <div className="app__reviews" id="reviews">
      <div className="app__reviews-card">
        <div className="app__reviews-card_slider section__padding">
          <img
            src={data.testimonials[slideIndex].image}
            alt="client image"
            className="slider-img"
          />
          <p className="p__nunito">{data.testimonials[slideIndex].comment}</p>
          <h4 className="headtext3">{data.testimonials[slideIndex].client}</h4>
        </div>
        {/* next and previous button */}
        <button onClick={goBack} className="carousel-btn" style={{ left: 0 }}>
          <LuArrowBigLeftDash />
        </button>
        <button
          onClick={goForward}
          className="carousel-btn"
          style={{ right: 0 }}
        >
          <LuArrowBigRightDash />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
