import { useState, useEffect } from "react";
import { coursesData } from "../../data/coursesData";
import styles from "./ItemList.module.css";
import Item from "../item/Item";

const ItemList = () => {
  const [courses, setCourses] = useState([]);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promesa resuelta");
    }, 2000);
  });

  useEffect(() => {
    promise
      .then(() => setCourses([...coursesData]))
      .catch(() => console.log("Error"));
  });

  return (
    <div className={styles.container}>
      {courses.map((course) => (
        <Item key={course.id} title={course.title} price={course.price} />
      ))}
    </div>
  );
};

export default ItemList;
