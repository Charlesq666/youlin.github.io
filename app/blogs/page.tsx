import { blogs } from "@/lib/blogs";
import React from "react";
import Blog from "@/app/blogs/components/BlogButton";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="m-4 bg-gray-200 h-full w-[95vw]">
      blogs
      <div className="grid grid-cols-3 gap-4 m-4 ">
        {blogs.map((blog) => (
            <Blog
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            />
        ))}
      </div>
    </div>
  );
};

export default page;
