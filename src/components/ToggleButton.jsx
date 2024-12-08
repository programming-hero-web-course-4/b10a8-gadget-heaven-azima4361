import { NavLink } from "react-router-dom";


const ToggleButton = () => {
    return (
        <div className="flex gap-5 justify-center items-center mt-0">
            <NavLink to="/dashboard/cart" className={({isActive}) =>`btn rounded-full border border-white px-10 font-bold ${isActive ? "bg-white text-black" : "bg-transparent text-white"}`}>
                <button>Cart</button>
            </NavLink>
            <NavLink to="/dashboard/wishlist" className={({isActive}) =>`btn rounded-full border border-white px-10 font-bold ${isActive ? "bg-white text-black" : "bg-transparent text-white"}`}>
                <button>Wishlist</button>
            </NavLink>
        </div>
    );
};

export default ToggleButton;