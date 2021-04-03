import React from 'react';

export const Course = ({ title, description, price }) => {
    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    )
}

export default Course;