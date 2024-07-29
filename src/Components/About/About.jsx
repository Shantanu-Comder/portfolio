import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.jpg';


const About = () => {
  return (
    <div id='about' className='about common'>

      <div className="title">
        <h1 className='headings'>About Me</h1>
      </div>

      <div className="sections">

        <div className="left">
            <img className='limage' src={profile_img} alt="" />
        </div>

        <div className="right">

            <div className="para">
                <p>Hello, My name is Shantanu Bala, currently residing in Delhi. I recently graduated with a B.Tech degree in Information Technology from Inderprastha Engineering College with a CGPA of 6.5+. I Have done my schooling from Vanasthali Public School with 90% in 12th and 83.4% in 10th.</p>
                <p>My passion lies in full stack web development. I have achieved certifications in Full Stack Web Development from Udemy and JavaScript from HackerRank and Great Learning, which have empowered me to develop comprehensive web applications independently.</p>
                <p>Apart from these, I have some side hobbies as well. In my free time, I prioritize fitness through jogging and yoga, and I also enjoy cooking with my mother. These activities help me maintain a balanced and healthy lifestyle.</p>
            </div>

            <div className="skills">
                <div className="skill"><p>HTML & CSS</p><hr style={{width:"90%"}} /></div>
                <div className="skill"><p>JavaScript</p><hr style={{width:"80%"}} /></div>
                <div className="skill"><p>MERN Stack</p><hr style={{width:"82%"}} /></div>
                <div className="skill"><p>C & PYTHON</p><hr style={{width:"75%"}} /></div>
            </div>

        </div>
      </div>
      <div className="achievements">

        <div className="achievement">
            <h1>5☆</h1>
            <p>Python Coder on HackerRank</p>
        </div>

        <hr />

        <div className="achievement">
            <h1>90%</h1>
            <p>In 12th Board CBSE</p>
        </div>

        <hr />

        <div className="achievement">
            <h1>5+</h1>
            <p>Projects Completed</p>
        </div>
        
      </div>
    </div>
  )
}

export default About
