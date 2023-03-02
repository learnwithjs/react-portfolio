import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/HeroImg2/HeroImg2'
import Navbar from '../components/Navbar/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 title="About" description="I am a frontend developer."/>
      <Footer/>
    </div>
  )
}

export default About