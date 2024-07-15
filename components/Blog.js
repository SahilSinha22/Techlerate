
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Blog1 from "@/public/Blog1.png";
import Blog2 from "@/public/Blog3.png";
import Blog3 from "@/public/Blog2.png";

const blogs = [
  {
    image: Blog1,
    category: "DESIGN",
    date: "June 30, 2024",
    title: "Balancing The Past With Contemporary Packaging Design",
  },
  {
    image: Blog2,
    category: "MARKETING",
    date: "June 30, 2024",
    title: "The Permanent Power of Retro Marketing",
  },
  {
    image: Blog3,
    category: "MARKETING",
    date: "June 29, 2024",
    title: "4 great platforms for creating and selling designs online",
  },
  {
    image: Blog1,
    category: "DESIGN",
    date: "June 30, 2024",
    title: "Balancing The Past With Contemporary Packaging Design",
  },
  {
    image: Blog2,
    category: "MARKETING",
    date: "June 30, 2024",
    title: "The Permanent Power of Retro Marketing",
  },
  {
    image: Blog3,
    category: "MARKETING",
    date: "June 29, 2024",
    title: "4 great platforms for creating and selling designs online",
  },
  // Add more blog objects here
];

const Blog = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const handleLoadMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  const handleShowLess = () => {
    setVisibleBlogs((prevVisibleBlogs) => Math.max(prevVisibleBlogs - 3, 3));
  };

  return (
    <div className="bg-[#18191f] text-foreground p-8 md:p-16">
      <div className="text-center mb-8">
        <span className="text-[#7b61ff] xl:text-lg PORTFOLIO font-bold text-xl">BLOG</span>
        <h2 className="text-6xl py-2 lg:py-0 xl:text-6xl md:text-7xl text-black Poppins font-bold">
          LATEST <span className="text-white py-10 lg:py-0">ARTICLES</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8">
        {blogs.slice(0, visibleBlogs).map((blog, index) => (
          <div key={index} className="bg-card p-4 rounded-lg">
            <Image
              className="h-[500px] w-[400px] object-cover mb-4"
              src={blog.image}
              alt={blog.title}
              width={500}
              height={8}
            />
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-gray-700 text-[#627af1] text-base py-1 px-4 rounded-full">{blog.category}</span>
              <span className="text-[#9a9898] text-base">{blog.date}</span>
            </div>
            <h2 className="text-2xl text-white">{blog.title}</h2>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        {visibleBlogs < blogs.length && (
          <button
            className="bg-primary text-white hover:bg-gray-600 py-2 px-6 rounded-full mr-4"
            onClick={handleLoadMore}
          >
            See Another Blogs
          </button>
        )}
        {visibleBlogs > 3 && (
          <button
            className="bg-secondary text-white hover:bg-gray-600 py-2 px-6 rounded-full"
            onClick={handleShowLess}
          >
            See Less Blogs
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
