import { Helmet } from "react-helmet";
import Dynamic_banner from "../components/Dynamic_banner";

import BlogsContainer from "../components/BlogsContainer";


const Blogs = () => {
    return (
        <div className="flex flex-col ">
            <Helmet>
        <title>Blogs || Gadget heaven</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
        <div className=" bg-purple-600">
            <Dynamic_banner heading={"Blogs"} subHeading={"Your ultimate destination for in-depth insights, expert tips, and the latest updates on technology, innovative gadgets, and smart living solutions. Explore, learn, and stay ahead in the ever-evolving world of tech."}>
            
            </Dynamic_banner>
           
            </div>
            
            <BlogsContainer></BlogsContainer>
         
           
           
           
            </div>
            
       
        
        // </div>
    );
};

export default Blogs;