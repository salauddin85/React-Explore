import React from 'react';

const Header = () => {
    return (
        <div>
        
            <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <ul className="flex space-x-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;