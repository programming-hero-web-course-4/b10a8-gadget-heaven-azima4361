import { Helmet } from "react-helmet";
import Dynamic_banner from "../components/Dynamic_banner";


const Statistics = () => {
    return (
        <div>
            <Helmet>
        <title>Statistics || Gadget heaven</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
            <div>
                <Dynamic_banner heading={"Statistics"} subHeading={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Dynamic_banner>
            </div>
        </div>
    );
};

export default Statistics;