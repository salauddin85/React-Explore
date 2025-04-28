import React from "react";
import PropTypes from "prop-types"; // ES6
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog,handleAddToBookmarks,handleMarkAsRead }) => {
  // console.log(handleAddToBookmarks)
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
          <button className="ms-3" onClick={() => handleAddToBookmarks(blog)}>
          <CiBookmark />
        </button>

        </div>
      </div>
      <div className="p-3">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-2xl pt-2.5">{hashtags}</p>
      </div>
      
        <button className="ms-3 p-3 text-purple-800 font-bold underline" onClick={() => handleMarkAsRead(blog)}>
          Mark as read
        </button>
      

    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks:PropTypes.func,
  handleMarkAsRead:PropTypes.func
};
export default Blog;
