

const BlogCard = ({blogs}) => {
    const {id,title,image,author,category,published_date,excerpt}=blogs;
    return (
        <div className=" gap-3 rounded-xl border-2 border-purple-300 p-2  md:p-5">
      <div className=" border-b-2 border-purple-100">
      <p className="text-center text-xl md:text-2xl
      font-bold pb-3 px-5">{title}</p>
      </div>
     
      <div className="flex flex-col md:flex-row justify-between items-start py-3 px-5  ">
        <div>
            <p className="text-lg font-bold">{author}</p>
            <p className="font-semibold">{category}</p>
        </div>
        <div>
            <p className="font-semibold">Date: {published_date}</p>
        </div>
      </div>
    
      <div className="flex flex-col md:flex-row justify-between items-start px-5">
        <div>
            <p className="font-medium pr-2">{excerpt}</p>
            <div className="text-right mt-3  mr-3 text-black font-semibold underline decoration-dotted hover:text-purple-700  ">
        <button className="">Read More....</button>
      </div>
        </div>
        <div>
        <img className="rounded-xl" src={image} alt="" />
        </div>
      </div>

     

      
    </div>
    );
};

export default BlogCard;