import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-232px)]'>
                 {/* dynamic section  */}
                 <Outlet></Outlet>
            </div>
           
            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;