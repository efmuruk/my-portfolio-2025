import React, { useState, useEffect } from "react";
import Hbg from "../assets/hbg.svg"


function Navbar() {
    const normalStyle = 'hover:text-pp-4 transition transform duration-300 hover:border-b-2 hover:border-white';
    const activeStyle = 'text-white border-b-2 border-pp-3'
    const [activeSection, setActiveSection] = useState('home-section');
    const sectionIds = ['home-section', 'about-section', 'education-section', 'skill-section',
         'project-section','contact-section'];
    const handleScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({
            behavior: 'smooth',
        });
        const scrollPosition = window.scrollY;
        sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      }
    });
        
}

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
    
    return (
        <>
            <nav className="flex justify-between px-16 py-5 text-2xl bg-dark-grey w-full text-white fixed top-0 z-50 shadow-md shadow-pp-4/10">
                <div className="">
                    Portfolio
                </div>
                <ul className="hidden lg:flex gap-16 text-pp-3">
                    <li className={activeSection === sectionIds[0] ? activeStyle : normalStyle}>
                      <button  onClick={() => handleScroll(sectionIds[0])}>Home</button>
                    </li>
                    <li className={activeSection === sectionIds[1] ? activeStyle : normalStyle}>
                      <button onClick={() => handleScroll(sectionIds[1])}>About</button>
                    </li>
                    <li className={activeSection === sectionIds[2] ? activeStyle : normalStyle}>
                        <button onClick={() => handleScroll(sectionIds[2])}>Education</button>
                    </li>
                    <li className={activeSection === sectionIds[3] ? activeStyle : normalStyle}>
                        <button onClick={() => handleScroll(sectionIds[3])}>Skills</button>
                    </li>
                    <li className={activeSection === sectionIds[4] ? activeStyle : normalStyle}>
                        <button onClick={() => handleScroll(sectionIds[4])}> Projects</button>
                    </li>
                    <li className={activeSection === sectionIds[5] ? activeStyle : normalStyle}>
                        <button onClick={() => handleScroll(sectionIds[5]) }> Contact</button>
                    </li>
                </ul>
                <div onClick={toggleMenu} className="size-10 lg:hidden">
                    <img className="size-full" src={ Hbg } />
                </div>
            </nav>
        {isMenuOpen && (
        <nav className="lg:hidden fixed top-20 z-50 left-0 w-full bg-dark-grey text-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-4">
            {sectionIds.map((id) => (
              <li
                key={id}
                className={activeSection === id ? activeStyle : normalStyle}
                onClick={() => {
                  handleScroll(id);
                  setIsMenuOpen(false);
                }}
              >
                {id.split("-")[0].toUpperCase()}
              </li>
            ))}
          </ul>
        </nav>
      )}
        </>
    )
}

export default Navbar