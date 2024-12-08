import { useLoaderData, useParams } from "react-router-dom";
import Rating from "./Rating";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from "../contexts/CartContext";
import { WishContext } from "../contexts/WishContext";
import { useContext } from "react";
import { PriceContext } from "../contexts/PriceContext";

const Details_card = () => {
    const data = useLoaderData();
    const {product_id}= useParams();
    const product = data.find((product) => product.product_id === product_id);
    const {product_title,product_image, price,availability,description,specification,rating,
    } = product;

    let [cart,setCart]= useContext(CartContext);
 let [newPrice, setPrice]= useContext(PriceContext);
  let [wishlist,setWish]= useContext(WishContext);
  const handleCart = (product)=>{
    const newPrice = myPrice + product.price;
  }
    return (
        <div className="relative -top-56 mx-auto max-w-[1440px] rounded-xl bg-white w-4/5 flex justify-center items-center gap-10 p-10 border-white border mb-0">
            <div className="  w-1/2">
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
            </div>
        </div>
    );
};

export default Details_card;