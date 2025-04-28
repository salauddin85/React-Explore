import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';
const Blogs = ({handleAddToBookmarks,handleMarkAsRead}) => {
    // console.log(handleAddToBookmarks)
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3'>

            
        {
        blogs && blogs.length > 0 && blogs.map(blog =>
            <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmarks={handleAddToBookmarks}
            handleMarkAsRead={handleMarkAsRead}
            />
        )
        }

        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blogs;