import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ftop">
        <div className="tleft">
          <img className="name" src={logo} alt="" />
          <p>
            Possess excellent communication and teamwork skills, with a strong
            drive to achieve new heights and continuously grow professionally.
          </p>
        </div>

        <div className="tright">

          <div className="mail">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>

          <div className="subs">Subscribe</div>

        </div>

      </div>

      <hr />
      
      <div className="fbottom">
        <p className="bleft">© 2024 Shantanu Bala. All rights reserved.</p>
        <div className="bright">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
