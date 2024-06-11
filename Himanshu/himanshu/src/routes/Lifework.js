import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg';
import Lworks from '../components/Lworks';

const Lifework = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg heading="LIFEWORK." text="Something my Achievements and My-Skills"/>
        <Lworks />
        <Footer/>
    </div>
  )
}

export default Lifework