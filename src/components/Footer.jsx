import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Purab Tola Pashchimi</p>
                        <p>Mordan School Gali</p>
                        <p>Balrampur-271201</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    +91-6387-766-749</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    mahek.singh.2001@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>This is Mahek Singh. A passionate front-end web developer as a fresher using HTML, CSS, JavaScript and Reactjs to build all aspects of the user experience and user interface for client-facing landing pages.</p>
                <div className="social">
                    <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
