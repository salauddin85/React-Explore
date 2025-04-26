import React from "react";
import PropTypes from "prop-types"; // ES6
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog }) => {
  console.log(blog);
  const {
    id,
    cover,
    title,
    author_img,
    author,
    reading_time,
    hashtags,
    posted_date,
  } = blog;
  return (
    <div>
      <div>
        <img className="rounded-lg w-full mb-8" src={cover} alt={`image of ${title}`} />
      </div>
      <div className="flex justify-between p-3">
        <div className="flex gap-3">
          <div>
            <img className="w-14 h-14 rounded-full" src={author_img} alt="" />
          </div>
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        
        <div className="text-xl opacity-70">
          <span>{reading_time} min read</span>
          <button className="ms-3 "><CiBookmark></CiBookmark></button>
        </div>
      </div>
      <div className="p-3">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-2xl pt-2.5">{hashtags}</p>
      </div>

    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
