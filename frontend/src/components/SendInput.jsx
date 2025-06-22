import React,{useState} from 'react'
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function SendInput() {
  const [message,setMessage]=useState("");
  const dispatch = useDispatch();
  const selectedUser = useSelector(store=>store.user.selectedUser)
  const onSubmitHandler = async(e) =>{
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/message/send/${selectedUser?._id}`,{message},{
        headers:{
          'Content-Type':'application/json'
        },withCredentials:true

      });
      console.log(res);
    } catch (error) {
      console.log("Error",error)
    }
    
    setMessage("")
  }
  
  
  
  return (
   <form onSubmit={onSubmitHandler} className="my-3 py-4">
    <div className='w-full relative flex items-center justify-between gap-1'>
        <input value={message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder="Type your message here..." className="border text-sm rounded-md w-full p-3 border-gray-500 text-gray-600 font-bold bg-[#7989a3] placeholder:text-gray-600" />
        <button type="submit" className="absolute flex items-center inset-y-0 right-0 px-4 py-3 rounded-md bg-[#7989a3] text-white hover:bg-[#5f6b8c] transition-all duration-300">
         <IoSend />
          {/* bg-[#7989a3] border border-[#7989a3] */}
        </button>
    </div>
   </form>
  )
}

export default SendInput