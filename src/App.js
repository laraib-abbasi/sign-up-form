import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Form from './component/signup'
import Login from './component/login'
import ForgotPass from './component/forgotPass'

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
    }

  ])
  return (
    <>
    
    <RouterProvider router={router}/>
</>
  )
}

export default App