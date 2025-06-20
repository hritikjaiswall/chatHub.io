import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()
  const onClickLogout = () => {
    const logout = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/user/logout', {
          withCredentials: true // Ensure cookies are sent with the request
        })
        if (response.status === 200) {
          console.log('Logout successful')
          navigate('/login') // Redirect to the login page after logout
        } else {
          console.error('Logout failed')
        }
      } catch (error) {
        console.error('Error during logout:', error)
      }
    }
    logout()
  }
  return (
    <button className="btn btn-sm btn-ghost" onClick={onClickLogout}>Logout</button>
  )
}

export default Logout