import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Contact from './Pages/Contact/Contact.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Users from './Pages/Users/Users.jsx';
import UserDetails from './Pages/UserDetails/UserDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
     
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: async ({ params}) => {
          console.log(params)
          const res = await fetch('https://jsonplaceholder.typicode.com/users');
          return res.json();
        }
        
      },
      {
        path: "/users/:id",
        element: <UserDetails></UserDetails>,
        loader: async ({ params}) => {
          console.log(params)
          const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
          return res.json();
        }
        
      },
      
    ]
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
