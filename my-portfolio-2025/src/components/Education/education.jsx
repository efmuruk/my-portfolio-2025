import React from "react";
import Timeline from './timeline'

function Education () {
    return (
        <>
            <div id="education-section" className="bg-dark-grey w-full h-screen text-white content-center font-montserrat z-2">
                <h1 className="text-3xl md:text-4xl mb-16 text-center font-medium">Education</h1>
                <div className='bg-pp-1 bg-opacity-20 pl-12 md:pl-20 pr-6 w-10/12 sm:w-8/12 md:w-5/12  py-12 mx-auto rounded-2xl border border-pink-2 text-pp-4 shadow-xl shadow-pp-2/30'>
                    {/* Time Line Components */}
                    <Timeline />
                </div>
            </div>
        </>
    )
}

export default Education