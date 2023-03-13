import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
])
