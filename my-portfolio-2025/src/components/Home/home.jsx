import React from "react";
import Profilepic from '../../assets/profilepic.jpeg' 
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Github from '../../assets/github.png'
import Spark from '../../assets/spark.png'
import CV from '../../assets/CV.pdf'


function Home() {
    return (
        // <>
            <div id="home-section" className="w-full h-screen bg-dark-grey to-pp-2/20 flex flex-col md:flex-row text-white justify-center font-montserrat">
                <div className="w-9/12 md:w-4/12 mx-auto content-center">
                    <div className="size-14 md:size-20 rounded-full object-cover relative top-10 mx-auto right-24 md:right-40 bg-pp-3 shadow-md shadow-pp-4/20"></div>
                    <img src={ Profilepic } className="size-56 md:size-80 z-3 rounded-full object-cover mx-auto shadow-lg shadow-pp-4/20 "/>
                    <img src={ Spark } className="size-14 md:size-20 rounded-full object-cover relative -top-10 mx-auto left-24 md:left-40"/>
                </div>
                <div className="w-10/12 md:w-5/12 mx-auto flex flex-col justify-center gap-5 md:gap-10">
                    <h1 className="text-2xl md:text-4xl">Welcome to my Portfolio</h1>
                    <h1 className="bg-white text-pp-2 text-4xl md:text-5xl pd-2 md:py-5 font-bold px-2">Hello <span className="text-bl-1">I am Pattaranun !</span></h1>
                    <div className="border border-white rounded-full px-3 md:py-5 md:px-6 py-3 rotate-12 self-end my-4 md:my-0 ">
                        <h1 className="text-2xl md:text-3xl text-pp-4 text-center">Computer Engineering</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <a href={CV} download="Pattaranun_CV" className="text-xl md:text-2xl text-pink underline hover:text-rose-200 transition transform duration-300 active:text-rose-400">Download Resume</a>
                        <div className="flex gap-3">
                            <button onClick={() => window.open('https://www.facebook.com/ffinch.ptay','__blank')}><img className='size-7 md:size-10 rounded-full hover:scale-110 transition transform duration-300 hover:shadow-md hover:shadow-pp-4/10 active:opacity-40' src={Facebook}/></button>
                            <button onClick={() => window.open('https://www.instagram.com/4xnch/','__blank')}><img className='size-7 md:size-10 rounded-full hover:scale-110 transition transform duration-300 hover:shadow-md hover:shadow-pp-4/10 active:opacity-40' src={Instagram}/></button>
                            <button onClick={() => window.open('https://github.com/efmuruk','__blank')}><img className='size-7 md:size-10 rounded-full hover:scale-110 transition transform duration-300 hover:shadow-md hover:shadow-pp-4/10 active:opacity-40 bg-white' src={Github}/></button>
                        </div>
                    </div>
                </div>
            </div>
        // </>
        
    )
}

export default Home