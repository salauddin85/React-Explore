import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    // Destructure the book object to extract properties
    const loadedData = useLoaderData();
    // const userparms = useParams();
    // console.log(userparms);
    console.log(loadedData);
    return (
        <div>

           <h1>BookDetail</h1>
           <p>Book Name: {loadedData.bookName}</p>
           <p>Author: {loadedData.author}</p>
           <p>Rating: {loadedData.rating}</p>
           <p>Category: {loadedData.category}</p>
           <p>Year of Publishing: {loadedData.yearOfPublishing}</p>

        </div>
    );
};

export default BookDetail;