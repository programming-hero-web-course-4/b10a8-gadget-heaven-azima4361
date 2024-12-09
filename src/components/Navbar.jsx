import { Link, NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { LiaHeart } from "react-icons/lia";
import { useContext } from "react";
import { WishContext } from "../contexts/WishContext";
import { CartContext } from "../contexts/CartContext";
import { PriceContext } from "../contexts/PriceContext";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({categories=[]}) => {
  const url = useLocation().pathname;
  const [cart,setCart]= useContext(CartContext);
  const [price,setPrice]=useContext(PriceContext);
  const [wishlist,setWish]= useContext(WishContext);

  const categoryList = categories.map((category) => category.category_name);
    return (
        <div className={`navbar  text-white mx-auto px-10 md:px-20 mx-w-[1440px] rounded-xl md:w-11/12 ${url ==='/' || categoryList.some((name)=> url=== `/category/${name}`) ? " text-white": "text-black py-4"}`}>
  <div className="navbar-start ">
    {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <Link to='/'>Home</Link>
      <Link to='/brands'>Brands</Link>
      <Link to='/statistics'>Statistics</Link>
      <Link to='/dashboard'>Dashboard</Link>
      </ul>
    </div> */}
    <Link to='/' className={`text-base md:text-xl lg:text-2xl font-bold ${url===`/`|| categoryList.some((name)=>url===`/category/${name}`)?"text-white":"text-black"}`}>Gadget Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1  text-lg">
      <li>
       <NavLink to="/" className={({isActive}) =>`${isActive? "rounded-full bg-purple-800 px-5 text-white" :"bg-transparent text-black hover:rounded-full hover:bg-purple-700 hover:text-white"}`}>Home</NavLink>
      </li>
      <li>
       <NavLink to="/brands" className={({isActive}) =>`${isActive? "rounded-full bg-purple-800 px-5 text-white" :"text-black hover:rounded-full hover:bg-purple-700 hover:text-white"}`}>Brands</NavLink>
      </li>
     
      <li>
       <NavLink to="/stat" className={({isActive}) =>`${isActive? "rounded-full bg-purple-800 px-5 text-white" :"text-black hover:rounded-full hover:bg-purple-700 hover:text-white"}`}>Statistics</NavLink>
      </li>
      <li>
       <NavLink to="/dashboard" className={({isActive}) =>`${isActive? "rounded-full bg-purple-800 px-5 text-white" :"text-black hover:rounded-full hover:bg-purple-700 hover:text-white"}`}>Dashboard</NavLink>
      </li>
     
     
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <NavLink to="/dashboard/cart" className={({isActive}) =>`rounded-full border border-slate-300 bg-white ${isActive? "rounded-full bg-purple-200  text-white" :"text-black hover:rounded-full hover:bg-purple-100 hover:text-white"}`}>
    <button className="text-lg rounded-full p-2 text-black"><FaShoppingCart  /></button></NavLink>
    <NavLink to="/dashboard/wishlist" className={({isActive}) =>`rounded-full border border-slate-300 bg-white ${isActive? "rounded-full bg-purple-200  text-white" :"text-black hover:rounded-full hover:bg-purple-100 hover:text-white"}`}>
    <button className="text-lg rounded-full  p-2 text-black"> <LiaHeart /></button>
    </NavLink>
    
   
 
  </div>
  <div className="dropdown dropdown-end lg:hidden ml-5">
      <div tabIndex={0} role="button" className="p-2 border border-x-slate-300 rounded-full lg:hidden text-black bg-white">
      <GiHamburgerMenu />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <li>
       <NavLink to="/" className={({isActive}) =>`${isActive? "rounded-full bg-purple-800 px-5 text-white" :"bg-transparent text-black hover:rounded-full hover:bg-purple-700 hover:text-white"}`}>Home</NavLink>
      </li>
      <li>
       <NavLink to="/brands" className={({isActive}) =>`${isActive? "rounded-full bg-purple-800 px-5 text-white" :"text-black hover:rounded-full hover:bg-purple-700 hover:text-white"}`}>Brands</NavLink>
      </li>
     
      <li>
       <NavLink to="/stat" className={({isActive}) =>`${isActive? "rounded-full bg-purple-800 px-5 text-white" :"text-black hover:rounded-full hover:bg-purple-700 hover:text-white"}`}>Statistics</NavLink>
      </li>
      <li>
       <NavLink to="/dashboard" className={({isActive}) =>`${isActive? "rounded-full bg-purple-800 px-5 text-white" :"text-black hover:rounded-full hover:bg-purple-700 hover:text-white"}`}>Dashboard</NavLink>
      </li>
      </ul>
    </div>
</div>
    );
};

export default Navbar;