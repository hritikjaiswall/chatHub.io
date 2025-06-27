import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toaster from 'react-hot-toast'
import { BASE_URL } from '..';
function Signup() {
  const [user,setUser] = React.useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })
  const navigate = useNavigate();
  const handleCheckBox = (gender) => {
    setUser({...user, gender})
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/user/register`, user,{
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      console.log(response);
      if(response.data.success){
        navigate('/login');
        toaster.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        toaster.error(error.response.data.message || 'SignUp failed');
      } else {
        toaster.error('An unexpected error occurred');
      }
    }
    setUser({fullName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''})
  }
  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 bg-blue-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center text-gray-900'>
          Signup
        </h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className='label p-2'>
              <span className='text-base font-bold border-blue-700 label-text text-white-900'>Full Name</span>
            </label>
            <input 
            value={user.fullName}
            onChange={(e) => setUser({...user, fullName: e.target.value})}
            type="text" placeholder='Your Name' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base font-bold border-blue-700 label-text text-white-900'>UserName</span>
            </label>
            <input 
            value={user.userName}
            onChange={(e) => setUser({...user, userName: e.target.value})}
            type="text" placeholder='UserName' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base font-bold border-blue-700 label-text text-white-900'>Email</span>
            </label>
            <input 
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            type="text" placeholder='Your Email' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base font-bold border-blue-700 label-text text-white-900'>Password</span>
            </label>
            <input 
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            type="password" placeholder='Password' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base font-bold border-blue-700 label-text text-white-900'>Confirm Password</span>
            </label>
            <input 
            value={user.confirmPassword}
            onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
            type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
          </div>
          <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
               <input
               checked={user.gender === 'male'}
               onChange={() => handleCheckBox('male')}
               type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>

            <div  className='flex items-center'>
              <p>Female</p>
              <input
              checked={user.gender === 'female'}
               onChange={() => handleCheckBox('female')}
               type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>
          </div>
          <Link to="/login" className='text-sm text-white-400 hover:underline'>
            Already have an account?
           </Link>
           <div>
            <button type = 'submit' className=" btn btn-block btn-sm btn-active btn-accent mt-1 border border-slate-700">SignUp</button>
           </div>
          
        </form>
      </div>
    </div>
  )
}

export default Signup