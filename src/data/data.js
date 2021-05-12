import firebase from "firebase/app";
import { db } from "../db/firebase";

export const getAllCourses = async () => {
  const courses = await db.collection("courses").get();
  const coursesArray = courses.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return coursesArray;
};

export const getCourse = async (id) => {
  const courseRef = await db.collection("courses").doc(id);
  const course = await courseRef.get();
  const singleCourse = {
    id: course.id,
    ...course.data(),
  };
  return singleCourse;
};

export const getCoursesByCategory = async (categoryName) => {
  const query = await db
    .collection("courses")
    .where("category", "==", categoryName);
  const courses = await query.get();
  const newCoursesArray = await courses.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return newCoursesArray;
};

export const categories = [
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

export const getCategoryTitle = (routingId) => {
  return categories.filter(
    (singleCategory) => singleCategory.payload === routingId
  );
};

export const submitOrder = async (userInfo, cart, total) => {
  const newOrder = {
    buyer: userInfo,
    items: cart,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: total,
  };
  try {
    const submit = await db.collection("orders").add(newOrder);
    const id = await submit.id;
    return id;
  } catch (err) {
    console.error("Error adding document: ", err);
  }
};
