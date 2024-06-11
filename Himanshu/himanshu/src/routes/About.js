import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg';
import './Aboutstyle.css';
import { Link } from 'react-router-dom';
import React1 from '../assets/react1.png';
import React2 from '../assets/react2.jpg';
import Dsa1 from '../assets/Dsa1.jpg';
import Dsa2 from '../assets/Dsa2.png';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="ABOUT." text="I'm a Front-End Developer and Programmer."/>
      <div className="headii">
      <h1>Who Am I?</h1>
      </div>
      <div className="about">
        <div className="left">
          <h1>React font-end developer</h1>
          <p>Im a react font-end developer. I create user friendly and responsive secure website.</p>
          <Link to="/contact"><button className='btn'>Contact</button></Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stact top">
              <img src={React1} className="img" alt="true"  />
            </div>
            <div className="img-stact bottom">
              <img src={React2} className="img" alt="true"  />
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="left">
          <h1>Programmer of DSA in java</h1>
          <p>I solve the problems of DSA in JAVA language.</p>
          <Link to="/contact"><button className='btn'>Contact</button></Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stact top">
              <img src={Dsa1} className="img" alt="true"  />
            </div>
            <div className="img-stact bottom">
              <img src={Dsa2} className="img" alt="true"  />
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default About