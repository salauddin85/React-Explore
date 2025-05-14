import React from 'react'
import './Headar.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function Headar() {
    return (
        <div>
            <nav>
                <ul  >
               
                    {/* <Link to ="/">Home</Link>
                    <Link to ="/about">About</Link>
                    <Link to ="/contact">Contact</Link>
                    <Link to ="/users">Users</Link>
                    <Link to="/posts">Posts</Link> */}

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/posts">Posts</NavLink>

                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/gallery">Gallery</NavLink>
                    <NavLink to="/faq">FAQ</NavLink>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Headar
