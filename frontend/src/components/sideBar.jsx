import React,{useState} from 'react'
import { MdOutlinePersonSearch } from "react-icons/md";
import OthersUser from './OtherUsers.jsx';
import Logout from './Logout.jsx';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { setSelectedUser } from '../redux/userSlice.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function SideBar() {
  const [search,Setsearch] = useState('');
  const {otherUsers}=useSelector(state=>state.otherUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(search);
    Setsearch('');
    const conversationUser = otherUsers.find((user)=>user.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversationUser){
      dispatch(setSelectedUser([conversationUser]))
      console.log(conversationUser);
    }else{
      toast.error('User not found!');
      navigate('/');
    }
  } 
  
  return (
    <div className='border-r border-slate-800 p-4 flex flex-col'>
      <form onSubmit={submitHandler} action ="" className='flex items-center gap-2 p-2'>
        <input onChange={(e)=>Setsearch(e.target.value)} type="text" placeholder="Search..." className="input input-bordered rounded-md text-gray-600 font-bold bg-[#7989a3] placeholder:text-gray-600" />
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
