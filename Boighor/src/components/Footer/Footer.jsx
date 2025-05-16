import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer>
        <div className="footer">
            <div className="footer-content">
                <h2>Footer</h2>
                <p>Some footer content goes here.</p>
            </div>
            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
           

        