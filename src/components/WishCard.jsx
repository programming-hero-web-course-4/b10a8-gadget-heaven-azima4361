import { MdDeleteForever } from "react-icons/md";

const WishCard = ({wish,handleDeleteWish}) => {
    const {product_title,product_image, price,availability,description,specification,rating,
    } = wish;
    return (
        <div className="mx-auto  w-3/4  gap-10  border rounded-xl border-purple-500 bg-white p-5 mt-10 flex justify-between"> 
        <div className="flex justify-center items-center gap-10">
            <div>
            <img className="w-40 rounded-xl border border-purple-300 bg-white" src={product_image} alt="" />
            </div>
           

            <div className="space-y-3">
            <p className="text-lg font-bold">{product_title}</p>
            <p>{description}</p>
            <p className="text-lg font-bold">Price: ${price}</p>
        </div>
        </div>
        
       
        <div className="text-xl  text-red-600">
        <button onClick={()=>handleDeleteWish(wish)}><MdDeleteForever /></button>
        </div>
        
       
        
    </div>
    );
};

export default WishCard;