import "./HeroImgStyles.css";

import React from 'react'
import IntoImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="intro-img" src={IntoImg} alt="IntroImg" />
    </div>
    <div className="content">
        <p>HI, I'M MAHEK SINGH</p>
        <h1>Frontend Developer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  </div>;
  
}

export default HeroImg;
