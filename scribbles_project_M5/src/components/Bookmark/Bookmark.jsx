import React from 'react';
import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    const {id,cover,title,author_img,author,reading_time,hashtags,posted_date} = bookmark
    return (
        <div>
            <div className='bg-slate-200 p-4 m-4 rounded-2xl'>
                <h2 className='text-2xl'>{title}</h2>

            </div>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark:PropTypes.object.isRequired
}
export default Bookmark;