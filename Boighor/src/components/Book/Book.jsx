import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  // Destructure the book object to extract properties
  const {bookId, bookName, author, rating, category, yearOfPublishing } = book;
  return (

    <Link to={`/books/${bookId}`} >
    
        <div className="card  w-[394px] h-[530px] shadow-sm mx-auto bg-gray-100 p-5">
      <div className=" bg-gray-200  rounded-2xl">
        <div className="my-4 flex justify-center">
          <img
            className="h-[266px] w-[200px] rounded-lg "
            src={book.image}
            alt={book.title}
          />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {/* Display the book name */}
          <div className="text-black">{bookName}</div>

          {/* <div className="badge badge-secondary">{rating}</div> */}
        </h2>
        <div className="text-black">Author: {author}</div>
        <div className="my-2 border-2 border-dashed border-gray-400"></div>
        <div className="card-actions justify-between items-center">
         {/* Display the category and year of publishing */}
         <div className="flex gap-2">
             <div className="badge badge-outline text-black">{category}</div>
            <div className="badge badge-outline text-black">
                {yearOfPublishing}
            </div>
         </div>
         <div>
            <div className="btn btn-outline btn-success font-bold text-black">{rating} ⭐</div>
         </div>
        </div>
        <div className="text-center ">
         <button className=" bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  ">
            Read More
          </button>
        </div>
      </div>
    </div>
    
    </Link>

  );
};

export default Book;
