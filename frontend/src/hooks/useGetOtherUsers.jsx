import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setOtherUser } from '../redux/userSlice.js'
import { BASE_URL } from '..';


function useGetOtherUsers() {

    axios.defaults.withCredentials = true
    const dispatch = useDispatch()
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/user/`)
        console.log('Other users:', response)
        dispatch(setOtherUser(response.data.data))
      } catch (error) {
        console.error('Error fetching other users:', error)
      }
    }

    fetchOtherUsers()
  }, [])
} 

export default useGetOtherUsers