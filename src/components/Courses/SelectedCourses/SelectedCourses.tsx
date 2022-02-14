import styles from "./SelectedCourses.module.css";
import { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../../../context/CartContext";
import Counter from "../../Counter/Counter";

const SelectedCourses = ({ courses, deleteEnabled }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className={styles.courses__container}>
      {courses.map((course) => {
        return (
          <div className={styles.course__frame} key={course.item.id}>
            {/* IMAGE */}
            <div className={styles.course__imgCont}>
              <img
                className={styles.course__img}
                src={course.item.img}
                alt={course.item.title}
              />
            </div>

            <div className={styles.course__settingsCont}>
              {/* TITLE */}
              <div className={styles.course__titleCont}>
                <p className={styles.course__title}>
                  {course.item.title} Course
                </p>
              </div>
              {/* COUNTER */}
              <div className={styles.course__counterCont}>
                x{course.quantity}
              </div>
              {/* PRICE */}
              <div className={styles.course__priceCont}>
                <p className={styles.course__price}>
                  ${course.item.price * course.quantity}
                </p>
              </div>
              {/* DELETE */}
              {deleteEnabled && (
                <div className={styles.course__btnCont}>
                  <button
                    className={styles.course__btn}
                    onClick={() => removeItem(course.item.id)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedCourses;
