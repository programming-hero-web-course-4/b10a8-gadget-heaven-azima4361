import { Helmet } from "react-helmet";
import Details_card from "../components/Details_card";
import Dynamic_banner from "../components/Dynamic_banner";
import { useEffect } from "react";

const Details = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    return (
        <div>
            <Helmet>
        <title>Details||Gadget heaven</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
            <div className="">
                <Dynamic_banner heading={"Product Details"} subHeading={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Dynamic_banner>
            </div>
            <Details_card></Details_card>
        </div>
    );
};

export default Details;