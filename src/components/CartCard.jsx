import { MdDeleteForever } from "react-icons/md";

const CartCard = ({cart,handleDeleteItem}) => {
    const {product_title,product_image, price,availability,description,specification,rating,
    } = cart;
    return (
       
<div className="mx-auto flex w-3/4  gap-10 items-center border rounded-xl border-purple-500 bg-white p-5 mt-10 "> 
            <div className="">
                <img className="w-40 rounded-xl border border-purple-300 bg-white" src={product_image} alt="" />
            </div>
            <div className="flex justify-between items-center gap-10">
            <div className="space-y-3">
                <p className="text-lg font-bold">{product_title}</p>
                <p>{description}</p>
                <p className="text-lg font-bold">Price: ${price}</p>
            </div>
            <div className="text-xl">
            <button onClick={()=>handleDeleteItem(cart)}><MdDeleteForever /></button>
            </div>
            </div>
           
            
        </div>
      
        
    );
};

export default CartCard;