import React from 'react'
import SendInput from './SendInput'

function MessageContainer() {
  return ( 
    <div className='md:min-w-[550px] flex flex-col '>
      <div className='flex gap-2 items-center bg-[#2b4569] text-white px-4 py-2 mb-2 rounded-md'>

                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src="https://i.pinimg.com/564x/a5/c1/c8/a5c1c8751214a3241c85406543ed3b86.jpg" alt="User-Avatar" className='rounded-full w-12 h-12' />
                    </div>
                </div>
                <div className='flex flex-col flex-1'> 
                    <div className='flex justify-between items-center gap-2 flex-1'>
                        <p className='text-sm font-bold text-gray-900'>User Name</p>

                    </div>
                </div>
            </div>
            <SendInput/>
    </div>
  )
}

export default MessageContainer