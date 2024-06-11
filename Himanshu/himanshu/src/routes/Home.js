import React from 'react'
import Navbar from '../components/Navbar'
import './homestyle.css';
import introImage from '../assets/01.jpg';
import ME from '../assets/me.jpg';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import Prowork from '../components/Prowork';


const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="hero">
        <div className="mask">
          <img src={ introImage } alt="introImage" className="into-img" />
        </div>
        <div className="content">
          <img src={ ME } alt="ME" className="me" />
          <p>HI, I'M HIMANSHU KUMAR</p>
          <div>
            <Link to="/project" className="btn">projects</Link>
            <Link to="/contact" className="btn btn-light">contact</Link>
          </div>
        </div>
      </div>
      <Prowork />
      <Footer />
    </div>
  )
}

export default Home