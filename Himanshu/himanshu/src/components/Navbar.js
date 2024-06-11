import React, { useState } from 'react';
import './Navstyle.css';
import {Link} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >=100){
      setColor(true);
    } else{
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

    return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>A N K U</h1>
      </Link>
      <ul className={click ? "n-menu active" : "n-menu"}>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/lifework">Lifework</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: 'white'}}/>) : (<FaBars size={20} style={{color: 'white'}}/>)}
      </div>
    </div>
  )
}

export default Navbar