
import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router";
import courses from '../../data/data';

import Banner from '../../components/Courses/Banner/Banner';
import CoursesList from '../../components/Courses/CoursesList/CoursesList';

const CoursesContainer = (props) => {

    const [coursesList, setCoursesList] = useState(courses);
    // console.log(props);

    return (
        <div>
            <Banner categoryHeader="Programming Fundaments" />
            <CoursesList courses={coursesList}/>
        </div>
    )
}

export default withRouter(CoursesContainer);