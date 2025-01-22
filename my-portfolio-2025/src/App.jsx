import React from "react"
import Home from './components/Home/home'
import Navbar from './components/navbar'
import About from './components/About/about.jsx'
import Education from './components/Education/education.jsx'
import Skill from './components/Skills/skills.jsx'
import Project from './components/Projects/projects.jsx'
import Footer from './components/Home/footer'
function App() {


  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-dark-grey sm:gap-0 gap-20">
        <Home />
        <About />
        <Education />
        <Skill />
        <Project />
        <Footer />
      </div>
    </>
  );
}


export default App