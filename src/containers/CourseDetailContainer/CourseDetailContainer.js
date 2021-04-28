// Dependencies
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Data
import { getCourse } from "../../data/data";
// Components
import CourseDetail from "../../components/Courses/CourseDetail/CourseDetail";

const CourseDetailContainer = () => {
  const params = useParams();
  const [loader, setLoader] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    getCourse(params.id).then((course) => {
      setDetails({ ...course });
      setLoader(false);
    });
  }, [params.id]);

  return (
    <>{loader ? <h1>Loading...</h1> : <CourseDetail details={details} />}</>
  );
};

export default CourseDetailContainer;
