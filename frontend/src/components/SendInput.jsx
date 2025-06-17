import React from 'react'
import { IoSend } from "react-icons/io5";

function SendInput() {
  return (
   <form className="my-3 py-4">
    <div className='w-full relative flex items-center justify-between gap-1'>
        <input type="text" placeholder="Type your message here..." className="border text-sm rounded-md w-full p-3 border-gray-500 text-gray-600 font-bold bg-[#7989a3] placeholder:text-gray-600" />
        <button type="submit" className="absolute flex items-center inset-y-0 right-0 px-4 py-3 rounded-md bg-[#7989a3] text-white hover:bg-[#5f6b8c] transition-all duration-300">
         <IoSend />
          {/* bg-[#7989a3] border border-[#7989a3] */}
        </button>
    </div>
   </form>
  )
}

export default SendInput