import React from 'react';
import Navbar from '../component/sheard/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/sheard/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;