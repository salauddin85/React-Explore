import Book from '../Book/Book';

import { useState } from 'react';
import { useEffect } from 'react';


const Books = () => {
    const [books, setBooks] = useState([]);
   
    useEffect(() => {
        fetch('public/booksData.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setBooks(data))
            .catch((error) => console.error('Error fetching books:', error));
    }, []);

    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-2'>Books ({books.length})</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {books.map(book => (
                    <Book key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Books;