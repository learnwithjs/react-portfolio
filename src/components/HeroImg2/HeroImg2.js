import "./HeroImg2Style.css";

import React from 'react'

const HeroImg2 = (props) => {
    const { title, description } = props;

    return (
        <div className="hero-img">
            <div className="heading">
                <h1>{title}</h1>
                <p>{description}.</p>
            </div>
        </div>
    )
}

export default HeroImg2