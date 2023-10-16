import React from 'react';
import './Books.css'

const Book = ({books}) => {
    const {name, price} = books;
    return (
        <div className='Student'>
            <h2>name: {name}</h2>
            <p>price: {price}</p>
        </div>
    );
};

export default Book;