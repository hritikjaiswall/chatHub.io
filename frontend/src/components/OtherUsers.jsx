import React from 'react'
import OtherUser from './otherUser.jsx'
import useGetOtherUsers from '../hooks/useGetOtherUsers.jsx'


function OtherUsers() {
  useGetOtherUsers()
  return (
    <div className='flex flex-col gap-2 overflow-y-auto h-full p-2'>
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
    </div>
  )
}

export default OtherUsers