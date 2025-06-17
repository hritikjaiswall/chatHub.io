import React from 'react'

function MessageIndividual() {
    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="chat-header">
                    <time className="mx-2 text-xs opacity-50">12:42</time>

                <div className="chat-bubble bg-[#0f1927]">It was said that you would, destroy the Sith, not join them.</div>
            </div>
            </div>
        </div>
    )
}

export default MessageIndividual