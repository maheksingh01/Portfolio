import React from "react";
import "./Hero.css";
// import profile_img from "../../assets/profile_img.svg";
import profile_img from "../../assets/My.png";
import resume from "../../assets/resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Mahek Singh,</span> frontend developer based in India
      </h1>
      <p>
        I am a frontend developer from Uttar Pradesh and I am a fresher who is
        hard-working and passionate learner keen to learn new technologies. I
        have various project in front end. I have skills in HTML5, CSS3,
        Bootstrap, JavaScript and React JS
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        {/* <div className="hero-resume">My resume</div> */}
        <div className="hero-resume">
          <AnchorLink className="resume-style" href={resume} download={resume}>
            My Resume
          </AnchorLink>
          {/* <Link to={resume} download>
            My Resume
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
