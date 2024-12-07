import { NavLink } from "react-router-dom";



const Category = ({categories}) => {
    return (
        <div className="flex flex-col gap-7">
            <NavLink to='/' className={({isActive})=>`text-medium rounded-full py-2 text-center ${isActive ? "bg-purple-800 text-white" : "bg-purple-300 text-black"}`}>
                <div>
                    <p>All Products</p>
                </div>
            </NavLink>
            {categories.map((category)=>(
                <NavLink key={category.category_id} category={category} to={`/category/${category.category_name}`}
                className={({isActive})=>`text-lg text-center  rounded-full ${isActive?"bg-purple-600 text-white": "bg-purple-300 text-black"}`}>
                    <div>
                        <p>{category.category_name}</p>
                    </div>
                </NavLink>
            ))}
        </div>

    );
};

export default Category;