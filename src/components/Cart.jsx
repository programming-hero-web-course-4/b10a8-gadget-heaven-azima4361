import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { PriceContext } from "../contexts/PriceContext";
import Modal from "./Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartCard from "./CartCard";


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
        <div className="mx-auto max-w-[1440px] mt-24 ">
            <div className="mx-auto flex justify-center items-center gap-20">
                <p>Cart</p>
                <div className="flex justify-center items-center gap-7">
                <p>Total Cost: $</p>
                <button onClick={handleSortByPrice}>Sort by Price</button>
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