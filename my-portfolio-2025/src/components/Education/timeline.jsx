import React from "react";

function Timeline() {
    return (
        <>
        <div className="container mx-auto ">
          <div className="relative border-l border-pp-4">
              <div className="mb-10 ml-6">
                <div className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-pp-1 rounded-full text-white font-bold">
                </div>
                <div className="items-center gap-2">
                  <h3 className="md:text-lg text-pp-1">High-School</h3>
                  <h3 className="text-xl sm:text-2xl font-medium">Marie Upatham School</h3>
                  <h3 className="text-sm sm:text-base text-pink-2">May 2019 - March 2022</h3>
                  <h3 className="text-sm sm:text-base text-yellow-2">GPAX: 3.88</h3>
                </div>
              </div>
              <div className="ml-6">
                <div className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-pp-3 shadow-md shadow-pp-2/50 rounded-full text-white font-bold">
                </div>
                <div className="items-center gap-2 w-10/12">
                  <h3 className="md:text-lg text-pp-1">Undergraduate</h3>
                  <h3 className="text-xl sm:text-2xl font-medium">Bachelor of Computer Engineering 
                    @King Mongkut's University Technology of Thonburi</h3>
                  <h3 className="text-2xl font-semibold">
                  </h3>
                  <h3 className="ext-sm sm:text-base text-pink-2">August 2022 - Present</h3>
                  <h3 className="ext-sm sm:text-base text-yellow-2">GPAX: 3.60</h3>
                </div>
              </div>
          </div>
        </div>
        </>
        
    )
}

export default Timeline