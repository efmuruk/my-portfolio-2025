import React, { useState } from "react";
import ComCampPic from '../../assets/project_pic/comcamp.png'
import MyPic from '../../assets/profilepic1.jpeg'
import HotelPic from '../../assets/project_pic/Hotel.png'
import ZMCPic from '../../assets/project_pic/ZMC.png'
import BMHPic from '../../assets/project_pic/BMH2.png'
import SpoPic from '../../assets/project_pic/spytifod.png'

    
const ProjectDetails = [
    {
        name: 'Zuck My Clothe Mobile App',
        describe: 'Platform for laundry-delivery service include management web-application and mobile app for client.',
        type: 'design',
        pic: ZMCPic,
        date: 'September 2024 - December 2024',
        link: 'https://www.figma.com/design/JQKjbx1yCWuyCRUUiYdHVV/ZMC-Mobile-Application?node-id=0-1&t=u11oQeT1tCfLspQ1-1'
    },
    {
        name: 'Comcamp 34 (Uni-camp)',
        describe: 'Lead in graphic designer and design UX/UI design for landing and registration page.',
        type: 'design',
        pic: ComCampPic,
        date: 'January 2023 - April 2023',
        link: 'https://www.figma.com/design/KOzMK0FKtzsRcjQYgn0h1F/Comcamp?node-id=1-3016&t=u11oQeT1tCfLspQ1-1'
    },
    {
        name: 'Bangmod Hackathon 2024#2',
        describe: 'Create UX/UI design for landing page to give informations todfdf',
        type: 'design',
        pic: BMHPic,
        date: 'July 2024 - August 2024',
        link: 'https://www.figma.com/design/NMjnGrKeHyRA3bxVGU3Ajw/Untitled?node-id=1-1080&t=u11oQeT1tCfLspQ1-1'
    },
    {
        name: "Analysis spotify’s world wild rank",
        describe: 'Using python to analytic attribute of songs and their charts. How to success and get rank 1 of the world?',
        type: 'data',
        pic: SpoPic,
        date: 'May 2024',
        link:'https://www.kaggle.com/code/parksaranunt/datelmodar-spytifod/notebook'
    },
    {
        name: 'Hotel Management Web-application',
        describe: "Built the management by implementing React, Tailwind CSS, Node.js, and SQL. This website has many features such as reservations, room services, employee management, and dashboard",
        type: 'web',
        pic: HotelPic,
        date: 'April 2024 - May 2024',
        link: 'https://github.com/ChaiyapatOam/CPE241-FinalProject-Web'
    }
]

const handleOpen = (url) => {
    window.open(url, '_blank');
  };
function Project () {

    const Card = ({ project }) => {
        return (
            <>
                <div onClick={() => handleOpen(project.link)} className=" bg-white bg-opacity-10 rounded-2xl border border-white text-white 
                px-5 py-5 shadow-md md:shadow-lg shadow-pp-2/40 hover:scale-105 transition transform duration-300 hover:shadow-xl hover:shadow-pp-4/10">
                    <div className=" mb-4" >
                        <img className='w-60 h-28 md:h-40 object-cover' src={project.pic} />
                    </div>
                    <div className="flex flex-col gap-2 w-60">
                        <h1 className="text-xl font-semibold">{project.name}</h1>
                        <h2 className="h-20 text-pp-4">
                            {project.describe.length > 60? project.describe.slice(0,70) + '....' : project.describe }
                        </h2>
                        <h3 className="mt-2 text-right text-pp-3">{project.date}</h3>
                    </div>
                </div>
            </>
        )
    }

    const [type, setType] = useState('all')
    const handleClick = (id) => {
        setType(id);
        
    }

    const getButtonStyle = (buttonId) => {
        return buttonId === type ? 'bg-pp-2 text-white shadow-lg shadow-pp-3/20'
      : 'hover:bg-pp-4 hover:text-pp-1';
    };
    return (
        <>
            <div id="project-section" className="bg-dark-grey w-full h-max my-20 font-montserrat content-center">
                <div className="flex flex-col items-center">
                <h1 className=" text-3xl md:text-4xl font-medium text-center mb-8 text-white">Projects</h1>
                <div className="flex md:gap-4 md:text-xl text-pp-4">
                        <button id="all" onClick={() => handleClick('all')} className={`rounded-full transition transform duration-300 px-4 md:px-6 py-2 ${getButtonStyle('all')}`}    >All</button>
                        <button id="design" onClick={() => handleClick('design')} className={`rounded-full transition transform duration-300 px-4 md:px-6 py-2 ${getButtonStyle('design')}`}>Designing</button>
                        <button id="web" onClick={() => handleClick('web')} className={`rounded-full transition transform duration-300 px-4 md:px-6 py-2 ${getButtonStyle('web')}`}>Web-Dev</button>
                        <button id="data" onClick={() => handleClick('data')} className={`rounded-full transition transform duration-300 px-4 md:px-6 py-2 ${getButtonStyle('data')}`}>Data Science</button>
                </div>
                <div className="flex gap-x-5 justify-center mt-10 mx-10 sm:mx-20">

                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                            {type=='all'?
                            ProjectDetails.map(
                                (project) =><Card project={project}/>
                                ) : 
                            ProjectDetails.filter(project => project.type.includes(type)).map(
                                filteredType => <Card project={filteredType} />
                            )}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Project