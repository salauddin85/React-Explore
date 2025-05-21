import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        
            {/* <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <ul className="flex space-x-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Header;