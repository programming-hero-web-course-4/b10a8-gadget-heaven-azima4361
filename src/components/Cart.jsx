import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { PriceContext } from "../contexts/PriceContext";
import Modal from "./Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartCard from "./CartCard";
import { PiArrowsDownUpBold } from "react-icons/pi";


const Cart = () => {
    const [cart,setCart]= useContext(CartContext);
    const [price,setPrice]=useContext(PriceContext);

const handleDeleteItem = (product)=>{
    setCart((prevItem)=>
        prevItem.filter((item)=> item.product_id!== product.product_id),)
    setPrice((prevPrice)=>prevPrice-product.price);
};

const handleSortByPrice =()=>{
    setCart((prevItem)=>[...prevItem].sort((a,b)=> b.price- a.price));
}
    return (
        <div className="mx-auto max-w-[1440px] mt-12 md:mt-24 ">
            <div className="mx-auto flex flex-col md:flex-row justify-between items-center md:w-3/4">
                <p className="text-2xl font-bold">Cart</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-9">
                <p className="text-2xl font-bold">Total Cost: ${price}</p>
                <div className="flex flex-col md:flex-row justify-center items-center">
                   
                    <button className="btn rounded-full border border-purple-600 bg-white" onClick={handleSortByPrice}>Sort by Price<PiArrowsDownUpBold /> </button>
                    
                    
                </div>
                
                <Modal></Modal>
            </div>
            </div>
           
            <div>
                {cart.map((cart)=>(
                    <CartCard key={cart.product_id}cart={cart} handleDeleteItem={handleDeleteItem}></CartCard>
                ))}
            </div>
        </div>
    );
};

export default Cart;