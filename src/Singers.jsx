import React from 'react';

const Singers = ({singer}) => {
    const {name, age} = singer;
    return (
        <div style = {{
            border: '2px solid red',
            padding: '20px',
            margin: '20px',
            borderRadius: '15px',
          }}>
            <h2>name: {name}</h2>
            <p>age: {age}</p>
        </div>
    );
};

export default Singers;