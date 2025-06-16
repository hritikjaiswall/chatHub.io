import { Link } from 'react-router-dom'
import React, { useState } from 'react'
function Login() {
  const [user, setUser] = useState({
    userName: '',
    password: '',
  })

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      userName: '',
      password: '',
    })
  }

  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 bg-blue-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center text-gray-900'>
          Login
        </h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className='label p-2'>
              <span className='text-base font-bold border-blue-700 label-text text-white-900'>UserName</span>
            </label>
            <input
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              type="text"
              placeholder='UserName'
              className='w-full input input-bordered h-10'
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base font-bold border-blue-700 label-text text-white-900'>Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder='Your Password'
              className='w-full input input-bordered h-10'
            />
          </div>



          <Link to="/register" className='text-sm text-white-400 hover:underline'>
            Don't have an account?
          </Link>
          <div>
            <button type='submit' className=" btn btn-block btn-sm btn-active btn-accent mt-1 border border-slate-700">Login</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login