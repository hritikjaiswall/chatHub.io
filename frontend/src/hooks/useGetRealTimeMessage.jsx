// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { setMessages } from '../redux/messageSlice'

// function useGetRealTimeMessage() {
//     const {socket} = useSelector(store=>store.socket)
//     const {messages} = useSelector(store=>store.message)
//    const dispatch = useDispatch()
//     useEffect(()=>{
//         socket.on('newMessage', (newMessage)=>{
//             dispatch(setMessages([...messages, newMessage]))
//         })
//     },[socket,messages,setMessages])
// }

// export default useGetRealTimeMessage

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

function useGetRealTimeMessage() {
    const { socket } = useSelector(store => store.socket);
    const { messages } = useSelector(store => store.message);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!socket) return;  // ✅ Prevent null access

        const handleNewMessage = (newMessage) => {
            dispatch(setMessages([...messages, newMessage]));
        };

        socket.on('newMessage', handleNewMessage);

        // ✅ Cleanup to avoid duplicate listeners
        return () => {
            socket.off('newMessage', handleNewMessage);
        };

    }, [socket, messages, dispatch]);  // Only valid dependencies
}

export default useGetRealTimeMessage;
