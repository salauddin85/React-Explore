import React from 'react';
import Bookmark from '../Bookmark/Bookmark'; 
import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 bg-gray-100 ml-4 rounded-2xl'>
            <div className='m-4 bg-blue-200 p-3 rounded-2xl mb-6'>
                <h1 className='text-3xl font-bold text-center'>Spent time on read : {readingTime} min</h1>
            </div>
            <h1 className='text-3xl font-bold text-center'>Bookmarks</h1>
            {
                bookmarks.map((bookmark, idx) => (
                    <Bookmark key={idx} bookmark={bookmark} />
                ))
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime:PropTypes.number
}
export default Bookmarks;
