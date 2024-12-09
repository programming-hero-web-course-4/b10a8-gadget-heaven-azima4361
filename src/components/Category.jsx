import { NavLink } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const Category = ({categories}) => {
    return (
        <div className="flex flex-col gap-3 lg:gap-7 bg-white border border-purple-200 rounded-xl sm:p-5 md:p-2 lg:p-5">
            <NavLink to='/' className={({isActive})=>`text-sm lg:text-lg rounded-full py-2 text-center font-semibold ${isActive ? "bg-purple-800 text-white" : "bg-purple-200 text-black"}`}>
                <div>
                    <p>All Products</p>
                </div>
            </NavLink>
            {categories.map((category)=>(
                <NavLink key={category.category_id} category={category} to={`/category/${category.category_name}`}
                className={({isActive})=>`text-sm lg:text-lg text-center  rounded-full py-2 font-semibold ${isActive?"bg-purple-600 text-white": "bg-purple-100 text-black"}`}>
                    <div>
                        <p>{category.category_name}</p>
                    </div>
                </NavLink>
            ))}
        </div>

    );
};

export default Category;