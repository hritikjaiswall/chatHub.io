import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import io from "socket.io-client";
import { useNavigate } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/register", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  const authUser = useSelector((store) => store.user.authUser);
  const [socketInstance, setSocketInstance] = useState(null);

  useEffect(() => {
    if (authUser) {
      const newSocket = io('http://localhost:8000');
      setSocketInstance(newSocket);

      // return () => newSocket.disconnect(); // cleanup
    }
  }, [authUser]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
