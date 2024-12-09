import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="relative rounded-xl border p-2 -top-36  ">
            <div>
                <div className="flex flex-col items-center gap-7 rounded-xl bg-purple-600 text-center text-white py-20">
                    <p className="w-4/5 md:w-3/4 text-xl md:text-3xl lg:text-5xl font-bold mt-12">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                    </p>
                    <p className="w-4/5 md:w-3/5 text-xl ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <Link to="/dashboard">
                    <button className="btn rounded-full w-32 text-lg mb-24">Shop now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;