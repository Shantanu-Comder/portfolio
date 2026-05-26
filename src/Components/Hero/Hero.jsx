import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (

    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span className="span">I'm SHANTANU BALA,</span> A Full Stack Web
        Developer.
      </h1>
      <p>
        I am a Full Stack Web Developer, Just completed my BTech in Information
        Technology from Inderprastha Engineering College.
      </p>

      <div className="action">

        <div className="connect btw">
          <AnchorLink className="anchor" offset={50} href="#footer">
            Connect With Me
          </AnchorLink>
        </div>

        <div
          className="resume btw"
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/resume.pdf';
            link.download = 'resume.pdf';
            document.body.appendChild(link);
            link.click();
            link.remove();
          }}
        >
          My Resume
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
