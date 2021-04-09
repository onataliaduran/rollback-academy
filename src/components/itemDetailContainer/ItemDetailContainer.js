import { useState, useEffect } from "react";
import { coursesData } from "../../data/coursesData";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [courseDetail, setCourseDetail] = useState({});

  const getCourse = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promesa resuelta");
    }, 2000);
  });

  useEffect(() => {
    getCourse.then(() => {
      setCourseDetail({ ...coursesData[0] });
    });
  });

  return (
    <div>
      <ItemDetail
        img={courseDetail.img}
        title={courseDetail.title}
        description={courseDetail.description}
        price={courseDetail.price}
      />
    </div>
  );
};

export default ItemDetailContainer;
