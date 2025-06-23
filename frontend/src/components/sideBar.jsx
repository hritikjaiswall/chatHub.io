import React from 'react'
import { MdOutlinePersonSearch } from "react-icons/md";
import OthersUser from './OtherUsers.jsx';
import Logout from './Logout.jsx';



function SideBar() {
  return (
    <div className='border-r border-slate-800 p-4 flex flex-col'>
      <form action ="" className='flex items-center gap-2 p-2'>
        <input type="text" placeholder="Search..." className="input input-bordered rounded-md text-gray-600 font-bold bg-[#7989a3] placeholder:text-gray-600" />
        <button type="submit" className="btn btn-rounded bg-[#7989a3] border border-[#7989a3]">
          <MdOutlinePersonSearch className ="w-6 h-6 "/>
        </button>
      </form>
      <div className='divider px-2'> </div>
      <OthersUser />
      <div className='mt-2'>
        <Logout />
    </div>  
    </div>
  )
}

export default SideBar
