import styles from "./Course.module.css";

export const Course = ({ img, title, description, price }) => {
  return (
    <div className={styles.course__container}>
      {img && (
        <div className={styles.course__imgCont}>
          <img className={styles.course__img} src={img} alt={title} />
        </div>
      )}
      <h3 className={styles.course__title}>{title}</h3>
      <p className={styles.course__desc}>{description}</p>
      <p className={styles.course__price}>${price}</p>
      <button className={styles.course__btn}>Add to cart</button>
    </div>
  );
};

export default Course;
