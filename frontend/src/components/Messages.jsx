import React from 'react';
import { useSelector } from 'react-redux'; // ✅ FIXED: Correct import
import MessageIndividual from './MessageIndividual';
import useGetMessages from '../hooks/useGetMessages.jsx';

function Messages() {
  const { selectedUser } = useSelector((store) => store.user); // ✅ If needed in your hook
  useGetMessages(); // Make sure this internally uses selectedUser if needed

  const { messages } = useSelector((store) => store.message);

  if (!messages || messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#2b4569] rounded-sm p-6">
  <div className="flex flex-col items-center text-center space-y-2">
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#7989a3] bg-opacity-30 text-white text-3xl shadow-md">
      💬
    </div>
    <p className="text-white text-lg font-semibold">No messages yet</p>
    <p className="text-gray-300 text-sm">Start a conversation to see your chats here.</p>
  </div>
</div>

    );
  }

  return (
    <div className='relative flex-1 overflow-y-auto p-4 bg-[#2b4569] rounded-sm'>
      <div className='flex flex-col gap-4'>
        {/* {messages.map((message) => (
          <MessageIndividual key={message._id} message={message} />
        ))} */}
        {messages?.map((message) => (
  message && message._id ? (
    <MessageIndividual key={message._id} message={message} />
  ) : null
))}

      </div>
    </div>
  );
}

export default Messages;
