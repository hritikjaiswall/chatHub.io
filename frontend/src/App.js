import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from "socket.io-client";
import { setOnlineUser } from './redux/userSlice.js';
import { setSocket } from './redux/socketSlice.js';

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/register", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  const authUser = useSelector((store) => store.user.authUser);
  const { socket } = useSelector((store) => store.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser) {
      const socketio = io('http://localhost:8000', {
        query: {
          userId: authUser._id
        }
      });

      dispatch(setSocket(socketio));

      // ⬇️ Listener only after socketio initialized
      socketio.on('getOnlineUsers', (onlineUsers) => {
        dispatch(setOnlineUser(onlineUsers));
      });

      // Cleanup
      return () => socketio.close();

    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser, dispatch]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
