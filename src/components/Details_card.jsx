import { useLoaderData, useParams } from "react-router-dom";
import Rating from "./Rating";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from "../contexts/CartContext";
import { WishContext } from "../contexts/WishContext";
import { useContext } from "react";
import { PriceContext } from "../contexts/PriceContext";
import AddToCart from "./AddtoCart";
import { LiaHeart } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";

const Details_card = () => {
    const data = useLoaderData();
    const {product_id}= useParams();
    const product = data.find((product) => product.product_id === product_id);
    const {product_title,product_image, price,availability,description,specification,rating,
    } = product;

    let [cart,setCart]= useContext(CartContext);
 let [myPrice, setPrice]= useContext(PriceContext);
  let [wishlist,setWish]= useContext(WishContext);
  const handleCart = (product)=>{
    const newPrice = myPrice + product.price;
  
  if (cart.some((p) => p.product_id === product.product_id)) {
    toast.error(`${product.product_title} is already added to cart`, {
      position: "top-center",
      autoClose: 2000,
      theme: "light",
      className: "font-bold",
    });
    return;
  } 
  setCart((prevCart)=>[...prevCart,product]);
  setPrice(newPrice);
  toast.success(`${product.product_title} is added to cart`,{
    position:"top-center",
    autoClose:2000,
    theme:"light",
    className:"font-bold",
  })
}

  const handleWish =(product)=>{
    if(wishlist.some((p)=>p.product_id===product.product_id)){
        toast.error(`${product.product_title} is already added to wishlist`, {
            position: "top-center",
            autoClose: 2000,
            theme: "light",
            className: "font-bold",
          });
          return;
    } else{
        wishlist=(prevWishList)=>[...prevWishList,product];
        setWish(wishlist);
        toast.success(`${product.product_title} is added to wishlist`, {
            position: "top-center",
            autoClose: 2000,
            theme: "light",
            className: "font-bold",
          });
    }
  }
    return (
        <div className="relative -top-16 md:-top-28 mx-auto max-w-[1440px] rounded-xl bg-white w-11/12 md:w-4/5 flex flex-col md:flex-row justify-center items-center gap-10 p-4 md:p-10 border-white border mb-0">
            <div className="  md:w-1/2">
                <img className="rounded-xl" src={product_image} alt="" />
            </div>
            <div className="space-y-2">
                <h3 className="text-3xl font-semibold">{product_title}</h3>
                <p className="font-semibold">Price:{price}$</p>
                <div className={`w-28 rounded-full text-center border ${availability? "bg-green-200 border-green-500":"bg-red-200 border-red-500" }`}>
                    <p>{availability ?"In stock" : "Out of Stock"}</p>
                </div>
                <p className="">{description}</p>
                <p className="font-bold">Specifications:</p>
                <ol className="list-decimal pl-10">
                    {specification.map ((specification,index)=>(
                        <li key={index}>{specification}</li>
                    ))}
                </ol>
                <p className="font-bold">Ratings: <Rating rating={rating}></Rating></p>
                <div className="flex gap-5">
                    <AddToCart product={product} isChosen={cart.some((p)=>p.product_id=== product.product_id)} handleCart={handleCart}></AddToCart>
                    <button onClick={()=>handleWish(product)} className="btn rounded-full bg-white text-xl" disabled={wishlist.some((p)=> p.product_id === product.product_id)}>{wishlist.some((p)=>p.product_id === product.product_id)?<FaHeart />:<LiaHeart />}</button>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
        
    );
};

export default Details_card;