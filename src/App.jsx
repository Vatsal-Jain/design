import React from 'react'
import './App.css'
import Experience from './Components/Experience/Experience'
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Services from './Components/Services/Services'

import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Footeer from './Components/Footeer/Footeer'

function App() {
  return (
    <>
   <Header />
   <Nav />
   <About />
   <Experience />
   <Services />
   <Portfolio />
   <Contact />
   <Footeer />
   
   </>

  )
}

export default App
