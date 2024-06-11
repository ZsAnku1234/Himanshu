import './Lwstyle.css';
import Lwcard from './Lwcard';
import Lwdata from './Lwdata';

import React from 'react';

const Lworks = () => {
  return (
    <div className="lwork-container">
        <h1 className="life-heading">Achievements</h1>
        <div className="life-container">
            {Lwdata.map((val, ind) => {
                return(
                    <Lwcard 
                    key={ind}
                    imgsrcl={val.imgsrcl}
                    titlel={val.titlel}
                    textl={val.textl}
                    viewl={val.viewl}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Lworks