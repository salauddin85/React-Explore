import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Main from './components/Layout/Main.jsx'
import Home from './components/Home/Home.jsx'
// router setup
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router} />
    
  </StrictMode>,
)
