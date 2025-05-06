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
import Posts from './Pages/Posts/Posts.jsx';
import PostDetail from './Pages/PostDetail/PostDetail.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
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
      {
        path: "/posts",
        element: <Posts></Posts>,
        loader: async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts');
          return res.json();
        }
      },
      {
        path: "/posts/:id",
        element: <PostDetail></PostDetail>,
        loader: async ({ params}) => {
          console.log(params)
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
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
