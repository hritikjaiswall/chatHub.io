import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector } from 'react-redux';

function MessageContainer() {
  const selectedUser = useSelector((store) => store.user.selectedUser);

  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#2b4569] text-white text-xl font-semibold rounded-md">
        Select a user to start chatting 💬
      </div>
    );
  } 

  return (
    <div className='md:min-w-[550px] flex flex-col'>
      <div className='flex gap-2 items-center bg-[#2b4569] text-white px-4 py-2 mb-2 rounded-md shadow-md'>
        <div className='avatar online'>
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
