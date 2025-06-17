import React from 'react'

function OtherUser() {
    return (
        <div>
            <div className='flex gap-2 items-center hover:bg-[#7989a3] p-2 rounded-md cursor-pointer transition-all duration-200'>

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
        <div className='divider my-0 py-0 px-2'></div>
        </div>
    )
}

export default OtherUser