import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/HeroImg2/HeroImg2'
import Navbar from '../components/Navbar/Navbar'
import PricingCard from '../components/PricingCard/PricingCard'
import Work from '../components/WorkCard/Work'
import WorkCard from '../components/WorkCard/WorkCard'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 title="Projects" description="These all are my projects"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project