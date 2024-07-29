import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Achievements from './Components/Achievements/Achievements'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

let alertShown = false;


const App = () => {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Achievements/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
