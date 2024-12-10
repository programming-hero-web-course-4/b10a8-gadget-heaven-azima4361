import { MdDeleteForever } from "react-icons/md";

const CartCard = ({cart,handleDeleteItem}) => {
    const {product_title,product_image, price,availability,description,specification,rating,
    } = cart;
    return (
       
        <div className="mx-auto  w-3/4  gap-10  border rounded-xl border-purple-500 bg-white p-5 mt-10 flex flex-col md:flex-row justify-between"> 
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div>
            <img className="w-40 rounded-xl border border-purple-300 bg-white" src={product_image} alt="" />
            </div>
           

            <div className="space-y-3">
            <p className="text-lg font-bold">{product_title}</p>
            <p>{description}</p>
            <p className="text-lg font-bold">Price: ${price}</p>
        </div>
        </div>
        
       
        <div className="text-center md:text-right text-xl  text-red-600 ">
        <button onClick={()=>handleDeleteItem(cart)}><MdDeleteForever /></button>
        </div>
        
       
        
    </div>
      
        
    );
};

export default CartCard;