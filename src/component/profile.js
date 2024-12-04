import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate=useNavigate();
  const logoutBtn=(e)=>{
    e.preventDefault()
    navigate("/login")
  }
  return (
    <>
    <div className='dark:bg-dark-primBg dark:text-dark-bavit'>
    <button onClick={logoutBtn}
    className='bg-btnbg p-1 px-4 text-white font-semibold m-6 rounded-lg'>
      <a href='/signup'>Log out</a>
    </button>
    <div className='text-4xl flex items-center justify-center min-h-screen'>Welcome to profile</div>
    </div>
    </>
  )
}

export default Profile