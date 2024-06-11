import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import Prowork from '../components/Prowork';


const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="PROJECTS." text="Some of my most recent works"/>
      <Prowork />
      <Footer />
    </div>
  )
}

export default Project