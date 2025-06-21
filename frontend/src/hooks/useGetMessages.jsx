import React, { useEffect } from 'react' // 🔧 Removed useState
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import { setMessages } from '../redux/messageSlice'

const useGetMessages = () => {
    const dispatch = useDispatch() // 🔧 Added dispatch
    const { selectedUser } = useSelector(store => store.user)

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                console.log('Selected User:', selectedUser);

                if (!selectedUser) {
                    console.warn('No selected user found. Skipping message fetch.');
                    return;
                } else {
                   try {
                     axios.defaults.withCredentials = true;
                     console.log('Fetching messages for user:', selectedUser._id);
                     
                     const response = await axios.post(`http://localhost:8000/api/v1/message/${selectedUser._id}`);
                     
                     console.log('Messages:', response.data);
                     dispatch(setMessages(response.data)); // 🔧 Dispatching action to store messages
                   } catch (error) {
                    console.error('Error fetching messages:', error);
                    
                   } // 🔧 Still logs messages, doesn't store
                }
            } catch (error) {
                console.error('Error fetching messages:', error);
                throw error;
            }
        }

        fetchMessages();
    }, [selectedUser]); // 🔧 Still responds to user change
}

export default useGetMessages



// import React, { useEffect } from 'react'
// import axios from 'axios'
// import { useSelector } from 'react-redux'
// const useGetMessages = async () => {
//     const{selectedUser} = useSelector(store => store.user)
//     useEffect(()=>{
//         const fetchMessages = async() =>{
//             try {
//                 console.log('Selected User:', selectedUser);
                
//                 if (!selectedUser) {
//                     console.warn('No selected user found. Skipping message fetch.');
//                     return; // Exit if no user is selected
//                 }else{
//                     axios.defaults.withCredentials = true; // Ensure cookies are sent with requests
//                     console.log('Fetching messages for user:', selectedUser._id);
//                 const response = await axios.get(`http://localhost:8000/api/v1/message/${selectedUser?._id}`, {
//                 }
//             );
//                 console.log('Messages:', response);
//                 return response;
//             }} catch (error) {
//                 console.error('Error fetching messages:', error);
//                 throw error; // Re-throw the error for further handling if needed
//             }
//         }
//         fetchMessages()

//     },[])
// }

// export default useGetMessages