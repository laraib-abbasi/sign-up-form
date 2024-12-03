import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Form from './component/signup'
import Login from './component/login'
import ForgotPass from './component/forgotPass'
import Profile from './component/profile'
import Navbar from './component/navbar'
import DarkMode from './component/darkMode'
import { useState } from 'react'

const App = () => {
  const router=createBrowserRouter([
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
    {
      path:"/dark",
      element:<DarkMode/>
    }


  ])



  return (
    <>

    <RouterProvider router={router}/>
</>
  )
}

export default App