import React from 'react';
import SideBar from './sideBar.jsx';
import MessageContainer from './MessageContainer.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function HomePage() {
  const authUser = useSelector((store) => store.user.authUser);

  if (!authUser) {
    return (
      <div className="sm:h-[450px] md:h-[550px] backdrop-blur-md w-full rounded-xl overflow-hidden flex flex-col justify-center items-center bg-gradient-to-br from-[#13293D] to-[#1E3A5F] transition-all duration-300">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl p-10 text-center animate-fadeIn">
          <h1 className="text-4xl font-bold text-white mb-4 animate-slideDown">Welcome to ChatHub 👋</h1>
          <p className="text-lg text-gray-300 mb-6 px-6 animate-fadeIn delay-100">
            Please log in or sign up to start chatting with your friends.
          </p>
          <div className="flex justify-center gap-6 animate-slideUp delay-200">
            <Link
              to="/login"
              className="px-6 py-2 rounded-md bg-[#0f1927] text-white font-semibold hover:bg-[#2b4569] transition duration-300 shadow-md hover:shadow-lg"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 rounded-md bg-white text-[#0f1927] font-semibold hover:bg-gray-200 transition duration-300 shadow-md hover:shadow-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-xl overflow-hidden bg-white/5 backdrop-blur-lg bg-clip-padding bg-opacity-10 border border-white/10 shadow-lg transition-all duration-300 animate-fadeIn">
      <SideBar />
      <MessageContainer />
    </div>
  );
}

export default HomePage;
