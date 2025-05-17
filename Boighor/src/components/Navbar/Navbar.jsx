import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
//  common componentfunction for button,pages to read,listed books
 const commonComponent = (text) => {
    return text
};

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
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <p className="text-black font-bold text-lg">{commonComponent("Home")}</p>
            </li>
            <li>
              <p className="text-black font-bold text-lg">{commonComponent("Listed Books")}</p>
            </li>
            <li>
              <p className="text-black font-bold text-lg">{commonComponent("Pages to Read")}</p>
            </li>
          </ul>
        </div>
        <a class="  normal-case font-bold   lg:text-2xl  text-green-600">BOIGHOR</a>
      </div>
      <div class="navbar hidden lg:flex">
        <ul class="menu menu-horizontal px-1 gap-3">
          <li>
            <Link to="/">
              <button className="text-black font-bold text-lg">{commonComponent("Home")}</button>
            </Link>
          </li>
          <li>
            <p className="text-black font-bold text-lg">{commonComponent("Listed Books")}</p>
          </li>
          <li>
            <p className="text-black font-bold text-lg">{commonComponent("Pages to Read")}</p>
          </li>
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
