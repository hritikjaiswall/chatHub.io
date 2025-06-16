import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import React from 'react';  

const router = createBrowserRouter([
 {
  path: "/",
  element: <HomePage />,
 },
 {
  path: "/register",
  element: <Signup />,
 },
 {
  path: "/login",
  element: <Login />,
 }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
