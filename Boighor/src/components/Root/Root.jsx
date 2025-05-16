import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <h2>Hello world from root</h2>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;