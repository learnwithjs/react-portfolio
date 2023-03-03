import "./AboutContent.css"

import React from 'react'
import { Link } from "react-router-dom"
import react1 from '../../assets/react1.jpg';
import react2 from '../../assets/react2.webp';

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I am a full stack developer, who create both frontend and backend of web application for my clients.</p>
                <Link to="/contact" className="btn">Contact</Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack-top">
                        <img src={react1} alt="react1" className="image" />
                    </div>
                    <div className="img-stack-bottom">
                        <img src={react2} alt="react2" className="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent