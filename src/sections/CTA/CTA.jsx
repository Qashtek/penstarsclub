import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta" id="contact">
      <div>
        <h3 className="headtext3 white">Get in touch with us </h3>
        <p className="p__nunito">
          Feel free to give us a call, send an email across or write us a
          message on whatsApp.
        </p>
      </div>

      <div>
        <button className="custom__btn">
          <a
            href="https://linktr.ee/penstarsclub"
            target="_blank"
            className="white"
          >
            Contact us
          </a>
        </button>
      </div>
    </div>
  );
};

export default CTA;
