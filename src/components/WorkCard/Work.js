import "./WorkCard.css"

import React from 'react'

import project1 from '../../assets/project1.png'
import { NavLink } from "react-router-dom"
import WorkCard from "./WorkCard"
import projectData from "./WorkData"

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
              {
                projectData.map((item)=> <WorkCard item={item}/>)
              }
            </div>
        </div>
    )
}

export default Work;