import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

function SendInput() {
  const [newMessage, setNewMessage] = useState("");
  const dispatch = useDispatch();
  const { messages } = useSelector(store => store.message);
  const selectedUser = useSelector(store => store.user.selectedUser);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/message/send/${selectedUser?._id}`, 
        { message: newMessage }, 
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      console.log(res);

      // dispatch(setMessages([...messages, res.data.message])); // Correct path to message object
      dispatch(setMessages([...messages, res.data.message.message])); 

    } catch (error) {
      console.log("Error", error);
    }

    setNewMessage("");
  };

  return (
    <form onSubmit={onSubmitHandler} className="my-3 py-4">
      <div className="w-full relative flex items-center justify-between gap-1">
        <input 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          type="text" 
          placeholder="Type your message here..." 
          className="border text-sm rounded-md w-full p-3 border-gray-500 text-gray-600 font-bold bg-[#7989a3] placeholder:text-gray-600" 
        />
        <button type="submit" className="absolute flex items-center inset-y-0 right-0 px-4 py-3 rounded-md bg-[#7989a3] text-white hover:bg-[#5f6b8c] transition-all duration-300">
          <IoSend />
        </button>
      </div>
    </form>
  );
}

export default SendInput;
