// Dependencies
import { useState, useEffect } from "react";
import { withRouter } from "react-router";
// Data
import {
  getAllCourses,
  getCoursesByCategory,
  getCategoryTitle,
} from "../../data/data";
// Components
import Banner from "../../components/Courses/Banner/Banner";
import CoursesList from "../../components/Courses/CoursesList/CoursesList";

const CoursesContainer = ({ match }) => {
  const [loader, setLoader] = useState(true);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    if (!match.params.id) {
      getAllCourses().then((array) => {
        setCategoryTitle("All Courses");
        setCoursesList(array);
        setLoader(false);
      });
    } else {
      const title = getCategoryTitle(match.params.id);
      setCategoryTitle(title[0].title);
      getCoursesByCategory(match.params.id).then((coursesByCategory) => {
        setCoursesList(coursesByCategory);
        setLoader(false);
      });
    }
  }, [match.params.id]);

  useEffect(() => {
    fetch("https://huntershub.herokuapp.com/v1/recruiters/login", {
      method: "POST",
      body: JSON.stringify({
        username: "rainier",
        password: "12345678",
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Banner categoryHeader={categoryTitle} />
          <CoursesList courses={coursesList} />
        </>
      )}
    </>
  );
};

export default withRouter(CoursesContainer);
