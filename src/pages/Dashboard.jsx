import { Outlet } from "react-router-dom";
import Dynamic_banner from "../components/Dynamic_banner";
import ToggleButton from "../components/ToggleButton";
import { useEffect } from "react";
import { Helmet } from "react-helmet";


const Dashboard = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    return (
        <div className="flex flex-col ">
            <Helmet>
        <title>Dashboard||Gadget heaven</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
        <div className=" bg-purple-600">
            <Dynamic_banner heading={"Dashboard"} subHeading={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}>
            
            </Dynamic_banner>
            <div className="-mt-20 md:-mt-32">
            <ToggleButton ></ToggleButton>
            </div>
            </div>
            <div className="">
            <Outlet></Outlet>
            </div>
            
       
        
        </div>
      
    );
};

export default Dashboard;


