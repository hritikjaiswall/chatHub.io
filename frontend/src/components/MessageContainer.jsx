import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector } from 'react-redux';

function MessageContainer() {
  const selectedUser = useSelector((store) => store.user.selectedUser);
  const authUser = useSelector((store) => store.user.authUser);
  const {onlineUsers} = useSelector((store) => store.user);

  const isOnline = onlineUsers.includes(selectedUser?._id);
  if (!selectedUser) {
return (
  <div className="flex-1 flex flex-col items-center justify-center bg-[#2b4569] text-white text-center rounded-md p-6">
    
    <div className="flex flex-col items-center space-y-4">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#7989a3] bg-opacity-30 text-4xl shadow-md">
        👋
      </div>
      <h2 className="text-2xl font-bold">Hi {authUser?.fullName || 'there'}!</h2>
      <p className="text-gray-200 text-lg">Select a user to start chatting 💬</p>
    </div>
    
  </div>
);
  }

  return (
    <div className='md:min-w-[550px] flex flex-col'>
      <div className='flex gap-2 items-center bg-[#2b4569] text-white px-4 py-2 mb-2 rounded-md shadow-md'>
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className='w-12 rounded-full'>
            <img
              src={selectedUser?.profilePhoto || 'https://i.pinimg.com/564x/a5/c1/c8/a5c1c8751214a3241c85406543ed3b86.jpg'}
              alt="User-Avatar"
              className='rounded-full w-12 h-12'
            />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex justify-between items-center gap-2 flex-1'>
            <p className='text-md font-bold text-white'>
              {selectedUser?.userName}
            </p>
          </div>
        </div>
      </div>
      <Messages />
      <SendInput />
    </div>
  );
}

export default MessageContainer;
