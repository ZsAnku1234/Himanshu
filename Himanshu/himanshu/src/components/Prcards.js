import { NavLink } from 'react-router-dom';

import React from 'react'
import './Prstyle.css'

const Prcards = (props) => {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="imag1" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
              <p>{props.text}</p>
              <div className="pro-btns">
                <NavLink to={props.view} target="_blank" className="btn">Github Code</NavLink>
              </div>
            </div>
          </div>
  )
}

export default Prcards