import bannerImg from "../assets/banner.jpg";

const BannerImg = () => {
    return (
        <div className=" mx-auto  w-3/5 rounded-2xl border-2 border-white bg-white bg-opacity-10 p-3">
            <img className="rounded-xl" src={bannerImg} alt="" />
        </div>
    );
};

export default BannerImg;