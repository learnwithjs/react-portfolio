import "./HeroImgStyle.css"

import React from 'react'
import heroImg from '../../assets/intro-bg.jpg'
import { Link } from "react-router-dom"
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={heroImg} alt="hero"/>
      </div>
      <div className="content">
        <p>Hello, I am a freelancer.</p>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg