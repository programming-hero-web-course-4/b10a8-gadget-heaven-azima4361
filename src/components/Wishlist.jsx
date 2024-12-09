import { useContext } from "react";
import { WishContext } from "../contexts/WishContext";
import { toast, ToastContainer } from "react-toastify";
import WishCard from "./WishCard";


const Wishlist = () => {
    const [wishlist,setWish]= useContext(WishContext);
    const handleDeleteWish =(product)=>{
        setWish((prevItem)=>prevItem.filter((item)=>item.product_id!==product.product_id));
        toast.error(`${product.product_title} is deleted from Wishlist`,{
            position:"top-center",
            autoClose:2000,
            theme: "light",
            className:"font-bold",
        });
    }
    return (
        <div className="mx-auto max-w-[1440px] mt-24">
            <div className="mx-auto  w-3/4">
                <p className="text-2xl font-bold">Wishlist</p>
            </div>
            <div>
                {wishlist.map((wish)=>(<WishCard key={wish.product_id} wish={wish} handleDeleteWish={handleDeleteWish}></WishCard>))}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Wishlist;