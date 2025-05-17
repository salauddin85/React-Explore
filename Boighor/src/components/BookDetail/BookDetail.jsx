import { useLoaderData } from "react-router-dom";
import addToMarkRead from "../../utility/addToMarkRead";

const BookDetail = () => {
  // Destructure the book object to extract properties
  const loadedData = useLoaderData();
  const {
    bookId,
    bookName,
    author,
    rating,
    category,
    yearOfPublishing,
    image,
    review,
    totalPages,
    tags,
    publisher,
  } = loadedData;
  console.log(loadedData);
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden md:flex">
        {/* Book Image */}
        <div className="md:w-1/2 bg-gray-50 flex justify-center items-center p-6">
          <img
            src={image}
            alt={bookName}
            className="w-full max-w-sm rounded-xl shadow-sm border border-gray-200"
          />
        </div>

        {/* Book Info */}
        <div className="md:w-1/2 p-6 md:p-10 space-y-4 text-gray-800">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {bookName}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <p>
              <span className="font-semibold">Author:</span> {author}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span> {publisher}
            </p>
            <p>
              <span className="font-semibold">Total Pages:</span> {totalPages}
            </p>
            <p>
              <span className="font-semibold">Year:</span> {yearOfPublishing}
            </p>
            <p>
              <span className="font-semibold">Category:</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 ml-1 rounded-md text-xs">
                {category}
              </span>
            </p>
            <p>
              <span className="font-semibold">Rating:</span>
              <span className="text-yellow-500 font-semibold ml-1">
                {rating} ⭐
              </span>
            </p>
          </div>

          {/* Tags */}
          <div>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-2 py-1 mr-2 rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <div>
            <p className="font-semibold mb-1">Review:</p>
            <p className="text-gray-600 text-sm leading-relaxed">{review}</p>
          </div>
          <div>
            <button onClick={() => addToMarkRead(bookId)} className="bg-green-600 hover:bg-green-700 text-white font-bold w-full py-2 px-4 rounded cursor-pointer">
              Add to Reading List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
