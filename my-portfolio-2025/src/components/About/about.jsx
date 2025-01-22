import React from "react";
import Profilepic1 from '../../assets/profilepic1.jpeg'

function About () {
    return (
        <>
            <div id="about-section" className="bg-dark-grey w-full sm:h-screen h-max py-10 sm:py-0 text-white content-center font-montserrat">
                {/* <div className="flex flex-col h-full"> */}
                    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-0">
                        <div className="w-10/12 mx-auto md:w-4/12 flex flex-col items-center text-2xl gap-7">
                        <h1 className="text-4xl text-left font-semibold">About me</h1>
                            <img src={ Profilepic1 } className="size-48 md:size-64 rounded-full object-cover"/>
                            <div className="flex flex-col md:gap-4 text-pp-4 text-lg md:text-2xl">
                                <h1>Name: Pattaranun Ayaprasitphol</h1>
                                <h1>Email: finchptay@gmail.com</h1>
                            </div>
                        </div>
                        <div className="w-10/12 mx-auto md:w-4/12 content-center">
                            <div className="px-6 py-8 md:px-10 md:py-16 bg-pp-2 bg-opacity-20 rounded-lg md:text-xl text-purple-100 content-center shadow-md shadow-pp-3/20">
                                <p> ✨ Hello, I am Pattaranun Ayaprasitphol. 
                                I am a third-year Computer Engineering student 💻 with a passion 
                                for exploring new challenges and continuously seeking opportunities for personal growth. 
                                I am particularly interested in web design and development.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                {/* </div>                */}
            </div>
        </>
    )
}

export default About