import { useNavigate } from "react-router-dom";
import purchaseImg from "../assets/Group.png";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { PriceContext } from "../contexts/PriceContext";

const Modal = () => {
    const [cart,setCart]= useContext(CartContext);
    const [price,setPrice]=useContext(PriceContext);
    const navigate = useNavigate();
    const handleResetCart = ()=>{
        setCart([]);
        setPrice(0);
        navigate("/");
    }

    return (
        <div>
           
<button className="btn bg-purple-600 text-white rounded-full " disabled={price===0} onClick={()=>document.getElementById('my_modal_5').showModal()}>Purchase</button>
<dialog id="my_modal_5" className="modal modal-middle">
  <div className="modal-box flex flex-col items-center space-y-1">
    <img src={purchaseImg} alt="" />
    <h3 className="font-bold text-lg">Payment Successful!</h3>
    <p className="py-4">Thanks for Purchasing.
    </p>
    <p>Total: {price}</p>
    <div className="modal-action">
      <form method="dialog">
        
        <button onClick={handleResetCart} className="btn rounded-full px-20 md:px-40">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Modal;