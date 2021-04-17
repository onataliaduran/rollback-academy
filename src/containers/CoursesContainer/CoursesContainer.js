import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { allCourses, getCategory } from "../../data/data";
// Components
import Banner from "../../components/Courses/Banner/Banner";
import CoursesList from "../../components/Courses/CoursesList/CoursesList";

const CoursesContainer = ({ match }) => {
  console.log("ver el objeto", match.params.id);

  // TODO: mover esta data al forlder data
  const categories = [
    {
      payload: "frontend",
      title: "Frontend",
    },
    {
      payload: "backend",
      title: "Backend",
    },
    {
      payload: "programingFundamentals",
      title: "Programing Fundamentals",
    },
  ];

  const getCategoryTitle = (routingId) => {
    return categories.filter(
      (singleCategory) => singleCategory.payload === routingId
    );
  };

  const [coursesList, setCoursesList] = useState(allCourses);
  const [categoryTitle, setCategoryTitle] = useState("");

  // TODO: move it to the useCallback hook
  //   const showByCategory = () => {
  //     if (match.params.id === "frontend") {
  //       const category = getCategory("frontend");
  //       console.log("las categories", category);
  //       setCoursesList(category);
  //     } else {
  //       setCoursesList(allCourses);
  //     }
  //   };

  useEffect(() => {
    if (!match.params.id) {
      setCategoryTitle("All Courses");
      setCoursesList(allCourses);
    } else {
      const title = getCategoryTitle(match.params.id);
      const category = getCategory(match.params.id);
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
