import { NavLink } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const Category = ({categories}) => {
    return (
        <div className="flex flex-col gap-7 bg-white border border-purple-200 rounded-xl p-5">
            <NavLink to='/' className={({isActive})=>`text-lg rounded-full py-2 text-center ${isActive ? "bg-purple-800 text-white" : "bg-purple-200 text-black"}`}>
                <div>
                    <p>All Products</p>
                </div>
            </NavLink>
            {categories.map((category)=>(
                <NavLink key={category.category_id} category={category} to={`/category/${category.category_name}`}
                className={({isActive})=>`text-lg text-center  rounded-full py-2 ${isActive?"bg-purple-600 text-white": "bg-purple-100 text-black"}`}>
                    <div>
                        <p>{category.category_name}</p>
                    </div>
                </NavLink>
            ))}
        </div>

    );
};

export default Category;