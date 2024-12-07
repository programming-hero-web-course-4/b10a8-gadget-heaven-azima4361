import Details_card from "../components/Details_card";
import Dynamic_banner from "../components/Dynamic_banner";

const Details = () => {
    return (
        <div>
            <div className="pb-36">
                <Dynamic_banner heading={"Product Details"} subHeading={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Dynamic_banner>
            </div>
            <Details_card></Details_card>
        </div>
    );
};

export default Details;