import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" loading="lazy" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          voluptate dicta harum recusandae repellendus cupiditate ea soluta
          corrupti exercitationem nam.
        </p>
        <a href="#chef">
          <button type="button" className="custom__button">
            Know More
          </button>
        </a>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="chef's knife" loading="lazy" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          loading="lazy"
        />
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          voluptate dicta harum recusandae repellendus cupiditate ea soluta
          corrupti exercitationem nam.
        </p>
        <a href="#awards">
          <button type="button" className="custom__button">
            Know More
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default AboutUs;
