import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import Books from './components/Books/Books.jsx';
import Book from './components/Book/Book.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path:"/books/:bookId",
        element:<BookDetail />,
        loader: async ({params}) => {
          return fetch('/booksData.json')
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => data.find(book => book.id == params.id))
          .catch((error) => console.error('Error fetching books:', error));
        }

      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
