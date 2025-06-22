import React from 'react'
import OtherUser from './otherUser.jsx'
import useGetOtherUsers from '../hooks/useGetOtherUsers.jsx'
import { useSelector } from 'react-redux'

function OtherUsers() {
  useGetOtherUsers()
  const { otherUser } = useSelector(store=> store.user);
  if(!otherUser)return;
  return (
    <div className='flex flex-col gap-2 overflow-y-auto h-full p-2'>
      {otherUser?.map((user) => {
        return <OtherUser key={user._id} user={user} />
      })}
    </div>
  )
}

export default OtherUsers