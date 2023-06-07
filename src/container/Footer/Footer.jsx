import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding" id="newsletter">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hail Lane, Rudheath, CW9 7SG
        </p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer restaurant logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others"
        </p>
        <img
          src={images.spoon}
          alt="spoon image"
          className="spoon__img"
          style={{ marginTop: "15" }}
        />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/" target="_blank">
            <FiFacebook />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FiTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FiInstagram />
          </a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 02:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 03:00 pm</p>
      </div>
    </div>
    <div className="footer_copyright">
      <p className="p__opensans">2023 Rab365. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
