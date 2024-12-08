import { Outlet } from "react-router-dom";
import Dynamic_banner from "../components/Dynamic_banner";
import ToggleButton from "../components/ToggleButton";


const Dashboard = () => {
    return (
        <div className="flex flex-col">
        <div className="h-[200px] bg-purple-600">
            <Dynamic_banner heading={"Dashboard"} subHeading={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}>
            
            </Dynamic_banner>
            <div className="-mt-32">
            <ToggleButton ></ToggleButton>
            </div>
            <Outlet></Outlet>
        </div>
        
        </div>
      
    );
};

export default Dashboard;


