import React from "react";
import Logo from "../../assets/logo.svg";
import Instagram from "../../assets/socialMediaIcon/Instagram.svg";
import Facebook from "../../assets/socialMediaIcon/Facebook.svg";
import Twitter from "../../assets/socialMediaIcon/Twitter.svg";
import Pinterest from "../../assets/socialMediaIcon/Pinterest.svg";
import "./index.css";

const index = () => {
  return (
    <div id="footer">
      <div className="footer-container">
        <img src={Logo} alt="logo" id="logo" />
        <div className="nav-list">
          <h1>Home</h1>
          <h1>Attorneys</h1>
          <h1>Practice Areas </h1>
          <h1>About Us</h1>
        </div>
        <div id="logo-list">
          <img src={Instagram} alt="instagram" />
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Pinterest} alt="pinterest" />
        </div>
      </div>
      <div id="footer-base">
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default index;
