import React from 'react'
import './Project.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Project = () => {
  return (
    
    <div id='projects' className='project common'>
      
      <div className="ptitle">
        <h1 className='headings'>My Latest Projects</h1>
      </div>
      
      <div className="pcontainer">
        {mywork_data.map((work,index)=>{
          return <img key={index} src={work.w_img} alt="" />
        })}
      </div>
      
      <div className="showmore">
        <p>More in Future</p>
        <img src={arrow_icon} alt="" />
      </div>
      
    </div>
  )
}

export default Project