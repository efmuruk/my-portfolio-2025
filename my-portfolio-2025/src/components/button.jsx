import React from "react"
export default function Button({text}) {
    return(
        <>
            <button className="bg-pp-2 hover:bg-pp-1 hover:drop-shadow-sm text-white active:bg-pp-3 px-6 py-2 rounded-md">{text}</button>
        </>
    )
};