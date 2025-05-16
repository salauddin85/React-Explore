import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const Root = () => {
    return (
        <div >
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;