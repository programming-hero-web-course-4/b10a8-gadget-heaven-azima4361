import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";



const ProductContainer = () => {
    const {category_name}= useParams();
    const data = useLoaderData();
    const [products,setProduct]=useState([]);

    useEffect(()=>{
        if(category_name){
            const filterByCategoryname= data.filter(
                (product)=>product.category === category_name,
            );
            setProduct(filterByCategoryname);
        } else {
            setProduct(data);
        }
    }, [category_name,data]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product)=>(
                <ProductCard key={product.product_id} product={product}></ProductCard>
            ))}
            
        </div>
    );
};

export default ProductContainer;