import React from 'react'
import MessageIndividual from './MessageIndividual'

function Messages() {
  return (
    <div className='flex-1 overflow-y-auto p-4 bg-[#2b4569] rounded-sm'>
      <div className='flex flex-col gap-4'>
        <MessageIndividual/>
        <MessageIndividual/>
        <MessageIndividual/>
        <MessageIndividual/>
        <MessageIndividual/>
        <MessageIndividual/>
        <MessageIndividual/>
        <MessageIndividual/>
        <MessageIndividual/>
        <MessageIndividual/>
        </div>
    </div>
  )
}

export default Messages