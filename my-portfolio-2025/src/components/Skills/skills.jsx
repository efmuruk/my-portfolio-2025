import React from "react";
import IG from '../../assets/instagram.png'
import Cpic from '../../assets/C_programming.png'
import SQLpic from '../../assets/SQL.png'
import Pythonpic from '../../assets/python.png'
import Webpic from '../../assets/Web.png'
import JSpic from '../../assets/js.png'
import Reactpic from '../../assets/react.png'
import Figmapic from '../../assets/Figma.png'

function Skill () {
    const ProgrammingSkills = [
        {
            name:'C',
            pic:Cpic,
            level:'Advance'
        },
        {
            name:'SQL',
            pic:SQLpic,
            level:'Intermediate'
        },
        {
            name:'Python',
            pic:Pythonpic,
            level:'Intermediate'
        },
        {
            name:'HTML/CSS',
            pic:Webpic,
            level:'Intermediate'
        },
        {
            name:'Javascript',
            pic:JSpic,
            level:'Intermediate'
        },
        {
            name:'React',
            pic:Reactpic,
            level:'Beginner'
        },
    ]
    const DesignSkill = 
        {
            name:'Figma',
            pic:Figmapic,
            level:'Advance'
        }
    
    const ImageAndName = ({ Skill }) => {
        return (
        <>
            <div className="flex text-white gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                <img src={Skill.pic} className="size-10 md:size-16 object-cover"/>
                <div className="flex flex-col ">
                    <h1 className="text-pp-4 text-xl">{Skill.name}</h1>
                    <h1 className="text-pink-2 font-extralight">{Skill.level}</h1>
                </div>
            </div>
        </>
        )
    };
    return (
        <>
            <div id="skill-section" className="bg-dark-grey w-full h-screen font-montserrat content-center">
                    <h1 className="text-white text-4xl font-medium text-center mb-16">Skills</h1>
                    <div className="bg-pp-1 bg-opacity-20 px-4 lg:px-16 w-10/12 sm:w-8/12 md:w-7/12 lg:5/12 py-8 mx-auto rounded-2xl border border-pink-2 text-pp-4 shadow-xl shadow-pp-2/30">
                        <div className="">
                            <h1 className="text-2xl mb-5">Programming</h1>
                            <div className="grid grid-cols-2 gap-y-5">
                                {ProgrammingSkills.map((skill) => (
                                    <ImageAndName Skill={skill} />
                                ))}
                            </div>
                            
                        </div>
                        <div className="mt-8">
                            <h1 className="text-2xl mb-5">Other</h1>
                            <ImageAndName Skill={DesignSkill}/>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Skill