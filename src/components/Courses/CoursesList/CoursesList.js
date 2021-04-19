import React from "react";
import styles from "./CoursesList.module.css";
import { Link } from "react-router-dom";
import Course from "./Course/Course";

const CoursesList = ({ courses }) => {
  return (
    <div className={styles.courses__grid}>
      {courses.map((course) => {
        return (
          <Link key={course.id} to={`/course/${course.id}`}>
            <Course
              img={course.img}
              title={course.title}
              description={course.description}
              price={course.price}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CoursesList;
