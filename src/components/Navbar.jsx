import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { LiaHeart } from "react-icons/lia";

const Navbar = () => {
    return (
        <div className="navbar bg-purple-500 text-white container mx-auto py-5 px-20">
  <div className="navbar-start">
    <div className="dropdown">
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
    </div>
    <Link to='/' className=" text-3xl font-bold">Gadget Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-5 text-lg">
      <Link to='/'>Home</Link>
      <Link to='/brands'>Brands</Link>
      <Link to='/statistics'>Statistics</Link>
      <Link to='/dashboard'>Dashboard</Link>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <button className="text-lg rounded-full bg-slate-200 p-2 text-black"><FaShoppingCart  /></button>
    <button className="text-lg rounded-full bg-slate-200 p-2 text-black"> <LiaHeart /></button>
  
 
  </div>
</div>
    );
};

export default Navbar;