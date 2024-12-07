import  { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { PriceContext } from '../contexts/PriceContext';
import { WishContext } from '../contexts/WishContext';
import { CartContext } from '../contexts/CartContext';

const MainLayout = () => {
    const [cart , setCart]=useState([]);
    const [wish,setWish]= useState([]);
    const [price, setPrice]= useState(0);
    return (
        <div className='mt-10'>
            <PriceContext.Provider value={[price, setPrice]}>
                <WishContext.Provider value={[wish,setWish]}>
                    <CartContext.Provider value={[cart , setCart]}>
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
            </CartContext.Provider>
            </WishContext.Provider>
            </PriceContext.Provider>
        </div>
    );
};

export default MainLayout;