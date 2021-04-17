import React from "react";
import styles from "./CoursesList.module.css";
import Course from "./Course/Course";

const CoursesList = ({ courses }) => {
  return (
    <div className={styles.courses__grid}>
      {courses.map((course) => {
        return (
          <Course
            key={course.id}
            img={course.img}
            title={course.title}
            description={course.description}
            price={course.price}
          />
        );
      })}
    </div>
  );
};

export default CoursesList;
