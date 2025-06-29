import React, { useEffect, useState } from 'react' // ✅ UPDATED
import { setSelectedUser } from '../redux/userSlice.js';
import { useDispatch, useSelector } from 'react-redux';

function OtherUser({ user }) {
  const dispatch = useDispatch();
  const { selectedUser, onlineUser } = useSelector(store => store.user);
  const isOnline = onlineUser.includes(user._id);
  const setSelectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  // ✅ UPDATED: Log selectedUser after it updates
  //   useEffect(() => {
  //     console.log("Current Selected User in Redux:", selectedUser);
  //   }, [selectedUser]);

  return (
    <div>
      <div onClick={() => setSelectedUserHandler(user)}
        className={`flex gap-2 items-center p-2 rounded-md cursor-pointer transition-all duration-300
  ${selectedUser?._id === user?._id
            ? 'bg-[#7989a3] text-white'
            : 'hover:bg-[#313947] hover:text-white text-gray-300'}
`}
      // onClick={() => setSelectedUserHandler(user)}
      // className={`${
      //   selectedUser?._id === user?._id ? 'bg-[#7989a3]' : '' 
      // } flex gap-2 items-center hover:bg-[#313947] hover:text-gray-300 p-2 rounded-md cursor-pointer transition-all duration-200`}
      >
        <div className={`avatar ${isOnline ? 'online': ''}`}>
          <div className='w-12 rounded-full'>
            <img src={user?.profilePhoto} alt="User-Avatar" className='rounded-full w-12 h-12' />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex justify-between items-center gap-2 flex-1'>
            <p className='text-sm font-bold text-gray-900'>{user?.fullName}</p>
          </div>
        </div>
      </div>
      <div className='divider my-0 py-0 px-2'></div>
    </div>
  );
}

export default OtherUser;
