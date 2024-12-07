import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
    const {product_id,product_title, product_image, price}= product;
    return (
        <div className="flex flex-col rounded-xl border border-purple-300 bg-white p-5 space-y-2">
<img className="w-full rounded-xl border border-slate-300 h-[250px] p-4" src={product_image} alt="" />
<p className="text-xl font-bold">{product_title}</p>  
<p>Price: {price}$</p>  
<Link to={`/details/${product_id}`}>
<button className="btn rounded-full border border-purple-500 text-purple-500 bg-white w-30 px-5 mt-2">View Details</button></Link>        
        </div>
    );
};

export default ProductCard;