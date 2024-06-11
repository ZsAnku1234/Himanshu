import React from 'react'
import './Prstyle.css'
import Prcards from './Prcards';
import Prdata from './Prdata';

const Prowork = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Some projects created by me</h1>
        <div className="project-container">
          {
            Prdata.map((val, ind) => {
                return(
                    <Prcards 
                    key = {ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })
          }
        </div>
      </div>
  )
}

export default Prowork