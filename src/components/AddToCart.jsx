import { FaShoppingCart } from "react-icons/fa";

const AddToCart = ({product, handleCart, isChosen}) => {
    return (
        <div className="flex">
            <button className="btn flex rounded-full bg-purple-600 text-white" onClick={()=>handleCart(product)}>
                <p>{isChosen?"Added to Cart":"Add to Cart"}</p><FaShoppingCart  />
            </button>
        </div>
    );
};

export default AddToCart;