import "./FooterStyle.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>344, Kudi Bhagtasni</p>
                            <p>Jodhpur, Rajasthan, 342005</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            +917014477372
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            jitendrasuthar995@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="footer-right">
                    <h4>About the company</h4>
                    <p>I am a full stack developer. I love to create good looking user interface of web application and integrate them with backend.</p>
                    <div className="social">
                    <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
                    <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
                    <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer