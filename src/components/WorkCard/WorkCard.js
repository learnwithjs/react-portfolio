import "./WorkCard.css"

import React from 'react'

import project1 from '../../assets/project1.png'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
    const { image, title, text, view } = props.item
    return (
        <div className="project-card">
            <img src={image} alt="product" />
            <h2 className="project-title">{title}</h2>
            <div className="project-details">
                <p>{text}</p>
            </div>
            <div className="project-buttons">
                <NavLink to={view} className="btn">View</NavLink>
                <NavLink to="www.google.com" className="btn">Source</NavLink>
            </div>
        </div>
    )
}

export default WorkCard