import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/about_profile.svg";
import profile_img from "../../assets/Mahek.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a fresher Frontend Developer with the basic knowledge of
              frontend technologies and MERN stack
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              projects but also in the enthusiasm and dedication I bring to each
              project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML And CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node Js</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0</h1>
          <p>YEARS OF EXPERIANCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>9+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>FULL STACK PROJECT</p>
        </div>
      </div>
    </div>
  );
};

export default About;
