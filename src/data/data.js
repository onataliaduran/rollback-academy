import firebase from "firebase/app";
import { db } from "../db/firebase";

export const getAllCourses = async () => {
  const courses = await db.collection("courses").get();
  const coursesArray = courses.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  // console.log("all courses with their id", coursesArray);
  return coursesArray;
};

export const getCourse = async (id) => {
  const courseRef = await db.collection("courses").doc(id);
  const course = await courseRef.get();
  const singleCourse = {
    id: course.id,
    ...course.data(),
  };
  // console.log("single course", course.data());
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
  // console.log("courses by a given category", newCoursesArray);
  return newCoursesArray;
};

export const allCourses = [
  {
    id: 1,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/rollback%2Falgorithm%20(1).png?alt=media&token=e05334a4-1cd4-476d-b333-11a9f78c7966",
    title: "Algorithms",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 10.99,
    category: "programingFundamentals",
  },
  {
    id: 2,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/rollback%2Fdt.png?alt=media&token=f18370b7-ba7e-487d-b095-aa594fcc7a44",
    title: "Data Structures",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 10.99,
    category: "programingFundamentals",
  },
  {
    id: 3,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/rollback%2Funnamed%20(1).png?alt=media&token=fd7b92c7-c4f3-484b-9d9c-b8bd26647328",
    title: "Design Patterns",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 10.99,
    category: "programingFundamentals",
  },
  {
    id: 4,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/react%20(1).png?alt=media&token=cb0e42d0-afb5-48b2-ac55-38c2bdd43218",
    title: "React",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 9.99,
    category: "frontend",
  },
  {
    id: 5,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/rollback%2Fangular%20(1).png?alt=media&token=d71e11d4-7535-4e9d-8226-c38b9bda687b",
    title: "Angular",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 9.99,
    category: "frontend",
  },
  {
    id: 6,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/rollback%2Fvue-logo%20(1).png?alt=media&token=009ba371-b253-469c-ab67-e9ca1c64e643",
    title: "Vue",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 9.99,
    category: "frontend",
  },
  {
    id: 7,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/rollback%2Fnode%20(1).png?alt=media&token=ddb83ca2-ce2b-40c2-9630-95bad225b77d",
    title: "Node",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 9.99,
    category: "backend",
  },
  {
    id: 8,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/rollback%2Fdeno%20(1).png?alt=media&token=558c674a-53db-41e2-905b-be93e6e0c097",
    title: "Deno",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 9.99,
    category: "backend",
  },
];

export const filterByCategory = (category) => {
  getAllCourses();
  return allCourses.filter((course) => course.category === category);
};

export const getSingleCourse = (id) => {
  return allCourses.filter((course) => course.id === id);
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
