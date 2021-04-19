import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleCourse } from "../../data/data";
import CourseDetail from "../../components/Courses/CourseDetail/CourseDetail";

const CourseDetailContainer = () => {
  const params = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const info = getSingleCourse(+params.id);
    setDetails(info[0]);
  }, [params.id]);

  return (
    <>
      <CourseDetail details={details} />
    </>
  );
};

export default CourseDetailContainer;
