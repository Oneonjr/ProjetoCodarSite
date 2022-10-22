import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom"

  import {Home} from './Home' 
  import {Login} from './Login'
  import {Signup} from './Signup'
  import {Incial} from './Incial'
  import {Profile} from './Profile'
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/Signup",
      element: <Signup/>,
    },
    {
      path: "/Incial",
      element: <Incial/>,
    },
    {
      path: "/Profile",
      element: <Profile/>
    },
  ]);

  export const Router = () => (
    <RouterProvider router={router} />
  )