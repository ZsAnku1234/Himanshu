import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaPhone, FaYoutube } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import './Footerstyle.css';
import {Link} from 'react-router-dom';

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:'white',marginRight:'2rem'}}/>
                    <div>
                        <p>Siwan, Bihar</p>
                        <h4>INDIA</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: 'white', marginRight:"2rem"}} />+91 9876543210</h4>
                </div>
                <h4><MdMail size={20} style={{color: 'white', marginRight:"2rem"}} />himanshu1234kr@gmail.com</h4>
            </div>

            <div className="right">
                <h2 style={{color:'white'}}>Also Contact me on.</h2>
                <div className="social">
                    <FaLinkedin size={45} style={{color:'white', marginRight:"2rem"}} />
                    <FaFacebook size={45} style={{color:'white', marginRight:"2rem"}} />
                    <FaInstagram size={45} style={{color:'white', marginRight:"2rem"}} />
                    <Link to="https://youtube.com/@zsankuyt1058" target="_blank"><FaYoutube size={45} style={{color:'white', marginRight:"2rem"}} /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer