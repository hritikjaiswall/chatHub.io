import React from 'react'
import SideBar from './sideBar.jsx'
import MessageContainer from './MessageContainer.jsx'

function HomePage() {
  return (
    
    // <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-blue-950 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-10">
    <div className = "flex sm:h-[450px] md:h-[550px] rounded-lg bg-blue-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
      <SideBar />
      <MessageContainer /> 
    </div>
  )
}

export default HomePage