import React from 'react';
import Book from './Book';

const BookStore = ({books}) => {
    return (
        <div>
            Books Length: {books.length}
            {
                books.map((books, idx) => <Book key={idx} books={books}></Book>)
            }
        </div>
    );
};

export default BookStore;