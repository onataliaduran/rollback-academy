import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
// Data
import {
  allCourses,
  filterByCategory,
  getCategoryTitle,
} from "../../data/data";
// Components
import Banner from "../../components/Courses/Banner/Banner";
import CoursesList from "../../components/Courses/CoursesList/CoursesList";

const CoursesContainer = ({ match }) => {
  const [coursesList, setCoursesList] = useState(allCourses);
  const [categoryTitle, setCategoryTitle] = useState("");

  useEffect(() => {
    if (!match.params.id) {
      setCategoryTitle("All Courses");
      setCoursesList(allCourses);
    } else {
      const title = getCategoryTitle(match.params.id);
      const category = filterByCategory(match.params.id);
      setCategoryTitle(title[0].title);
      setCoursesList(category);
    }
  }, [match.params.id]);

  return (
    <>
      <Banner categoryHeader={categoryTitle} />
      <CoursesList courses={coursesList} />
    </>
  );
};

export default withRouter(CoursesContainer);
