import { useEffect } from 'react'
import axios from 'axios'

function useGetOtherUsers() {
    axios.defaults.withCredentials = true
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/user/')
        console.log('Other users:', response)
      } catch (error) {
        console.error('Error fetching other users:', error)
      }
    }

    fetchOtherUsers()
  }, [])
} 

export default useGetOtherUsers