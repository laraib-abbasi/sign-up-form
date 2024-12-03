import { createBrowserRouter, RouterProvider,Outlet,useLocation } from 'react-router-dom'
import Form from './component/signup'
import Login from './component/login'
import ForgotPass from './component/forgotPass'
import Profile from './component/profile'
import Navbar from './component/navbar'
import { useState } from 'react'

const Layout = () => {
  const location = useLocation();

  // Determine if the Navbar should be shown
  const showNavbar = location.pathname !== '/login';

  return (
    <>
      {showNavbar && <Navbar />}
      
      <Outlet />
    </>
  );
};

const App = () => {
  const router=createBrowserRouter([
    {path: '/',
    element: <Layout />, // Apply the Layout wrapper
    children: [
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/",
      element:<Form/>
    },
    {
      path:"/forgotPass",
      element:<ForgotPass/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/navbar",
      element:<Navbar/>
    },
  ],
},

{path:'/login', element:<Login/>}

  ])



  return (
    <>
    
    <RouterProvider router={router}/>
    
</>
  )
}

export default App