import React, {useRef} from 'react'

function MessageIndividual({message}) {
   const scroll = useRef();
    console.log("Message is",message)
    
    
    return (
        <div>
            <div ref={scroll} className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="chat-header">
                    <time className="mx-2 text-xs opacity-50">12:42</time>
                <div className="chat-bubble bg-[#0f1927]">
                    {message.message}
                </div>
            </div>
            </div>
        </div>
    )
}

export default MessageIndividual