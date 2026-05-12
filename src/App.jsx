

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from './Pages/LoginPage'
import Dashboard from './Pages/Dashboard'
import ProtectedRoute from './Components/Auth/ProtectedRoute'

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
      ],
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App


