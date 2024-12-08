import { RxCross2 } from "react-icons/rx";

const CartCard = ({cart,handleDeleteItem}) => {
    const {product_title,product_image, price,availability,description,specification,rating,
    } = cart;
    return (

        <div>
            <div>
                <img src={product_image} alt="" />
            </div>
            <div>
                <p>{product_title}</p>
                <p>{description}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={()=>handleDeleteItem(cart)}><RxCross2 /></button>
        </div>
    );
};

export default CartCard;