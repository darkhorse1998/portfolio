import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
// import Projects from './components/projects/Projects'
import CurrentSelfProject from './components/CurrentSelfProject/CurrentSelfProject';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import TopButton from './components/topButton/TopButton'
import Certificate from './components/Certificates/Certificate'


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      {/* <Projects /> */}
      <CurrentSelfProject />
      <Certificate />
      <Contact />
      <Footer />
      <TopButton />
    </div>
  )
}

export default App
