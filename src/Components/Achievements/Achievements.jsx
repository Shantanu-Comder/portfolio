import React from "react";
import "./Achievements.css";
import Achievements_Data from "../../assets/achievements_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Achievements = () => {
  return (
    <div id="achievements" className="certificate common">
      <div className="ctitle">
        <h1 className='headings'>My Achievements</h1>
      </div>

      <div className="container">
        {Achievements_Data.map((Achievement, index) => {
          return (

            <div key={index} className="format">
              <h3>{Achievement.s_no}</h3>
              <h2 className="sname">{Achievement.s_name}</h2>
              <p>{Achievement.s_desc}</p>

              <div className="more">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
