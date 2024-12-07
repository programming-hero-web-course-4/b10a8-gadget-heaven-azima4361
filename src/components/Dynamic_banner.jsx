

const Dynamic_banner = ({heading, subHeading}) => {
    return (
        <div className="mx-auto  max-w-[1440px] flex flex-col items-center gap-7  bg-purple-600 text-center text-white   pt-10 h-[300px]">
            <h3 className="text-4xl font-bold"> {heading}</h3>
            <p className="w-1/2 text-center">{subHeading}</p>
        </div>
    );
};

export default Dynamic_banner;