import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";


const BlogsContainer = () => {
    const blogs = useLoaderData();
    console.log(blogs);
  
    return (
      <div className="mx-auto max-w-[1440px] w-11/12 md:w-4/5 mt-12 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blogs={blog}></BlogCard>
        ))}
      </div>
    );
  };
  

export default BlogsContainer;




