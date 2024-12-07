import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='mt-10'>
            {/* navbar */}
            <div className='relative z-50 -top-10'>
            <Navbar></Navbar>
            </div>
            
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