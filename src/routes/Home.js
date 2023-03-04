import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroImg from '../components/HeroImg/HeroImg'
import Navbar from '../components/Navbar/Navbar'
import Work from '../components/WorkCard/Work'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work/>
      <Footer />
    </div>
  )
}

export default Home