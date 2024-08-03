import React, {useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Achievements from './Components/Achievements/Achievements'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

let alertShown = false;


const App = () => {

  useEffect(() => {
    if (!alertShown) {
      alert('Sorry for the inconvenience, but this website is not completely  responsive for the  smaller screens yet. I am working on it.');
      alertShown = true;
    }
  }, []);

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
