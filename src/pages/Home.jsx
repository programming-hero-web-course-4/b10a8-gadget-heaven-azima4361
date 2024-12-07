import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import BannerImg from "../components/BannerImg";
import Category from "../components/Category";


const Home = () => {
    const categories=useLoaderData();
    return (
        <div className="max-w-[1440px]mx-auto">
            <div>
                <Banner></Banner>
            </div>
            <div className="relative -top-[300px] z-10">
                <BannerImg></BannerImg>
            </div>

            <div className="mx-auto -mt-60 max-w-[1440px] w-11/12">
                <p className="text-center text-4xl font-bold mb-20">Explore Cutting-Edge Gadgets</p>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
                    <div className="md:col-span-1 ">
                        <Category categories={categories}></Category>
                    </div>
                    <div className="md:col-span-4">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;