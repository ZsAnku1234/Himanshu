import "./Lwstyle.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Lwcard = (props) => {
  return (
    <div className="life-card">
      <img src={props.imgsrcl} alt="imag" />
      <h2 className="life-title">{props.titlel}</h2>
      <div className="life-details">
        <p>{props.textl}</p>
        <div className="life-btns">
          <NavLink to={props.viewl} target="_blank" className="btn">G-drive Link</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Lwcard;
