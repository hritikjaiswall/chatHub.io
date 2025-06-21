import React, { use } from 'react'
import axios from 'axios'
const useGetMessages = async () => {
    useEffect(()=>{
        const fetchMessages = async() =>{
            try {
                const response = await axios.get('http://localhost:8000/api/v1/message/', {
                    withCredentials: true
                });
                console.log('Messages:', response.data);
                return response.data;
            } catch (error) {
                console.error('Error fetching messages:', error);
                throw error; // Re-throw the error for further handling if needed
            }
        }
        fetchMessages()

    },[])
}

export default useGetMessages