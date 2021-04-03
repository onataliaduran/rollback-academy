import React from 'react';
import Course from './Course/Course';

const CoursesList = ({ courses }) => {
    return (
        <div>
            { 
                courses.map( course => {
                    return <Course 
                                key={course.id} 
                                title={course.title} 
                                description={course.description} 
                                price={course.price} />
                })
            }
        </div>
    )
}

export default CoursesList;