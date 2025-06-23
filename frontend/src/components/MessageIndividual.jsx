import React, {useEffect, useRef} from 'react'
import { useSelector } from 'react-redux';
function MessageIndividual({message}) {
   const scroll = useRef();
   const {authUser,selectedUser} = useSelector(store=>store.user);
   useEffect(() => {
        scroll.current.scrollIntoView({behavior: "smooth"});
    }, [message])



    return (
        <div>
                <div ref={scroll} className={`chat ${authUser?._id === message.senderId? 'chat-end' : 'chat-start'}`}>
                <div className="chat-image avatar">
                    
                      <div className="w-10 rounded-full">
                          <img
                              alt="User profile"
                              src={authUser?._id === message.senderId ? authUser.profilePicture : message.senderProfilePicture} />
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