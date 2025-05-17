import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
// //  common componentfunction for button,pages to read,listed books
//  const commonComponent = (text) => {
//     return text
// };
  const links = <>
    <li className="font-bold  text-black"><NavLink  to="/">Home</NavLink></li>
    <li className="font-bold text-black"><NavLink to="/books">Books</NavLink></li>
    <li className="font-bold text-black"><NavLink to="/listedBooks">Listed Books</NavLink></li>
    <li className="font-bold text-black"><NavLink to="/pagesToRead">Pages To Read</NavLink></li>
  </>

  return (
   <div class="navbar w-full bg-white shadow-sm px-0 md:px-4 lg:px-10">

      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color="black"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
                
              />{" "}
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           
            {links}
          </ul>
        </div>
        <a class="  normal-case font-bold   lg:text-2xl  text-green-600">BOIGHOR</a>
      </div>
      <div class="navbar hidden lg:flex">
        <ul class="menu menu-horizontal px-1 ms-[100px] gap-3 ">
         
          {links}
        </ul>
      </div>
      <div class="navbar-end  gap-3 lg:flex">
        <a class="  bg-green-600 hover:bg-green-700 font-bold px-3 py-2 text-white rounded cursor-pointer ">SignIn</a>
        <a class="btn btn-ghost text-black hover:text-white font-bold">SignUp</a>
      </div>
    </div>
  );
};

export default Navbar;
