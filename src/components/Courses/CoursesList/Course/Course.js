import styles from "./Course.module.css";

const Course = ({ img, title, description, price }) => {
  return (
    <div className={styles.course__container}>
      <div className={styles.course__whiteShadow}></div>
      <div className={styles.course__glass}>
        {img && (
          <div className={styles.course__imgCont}>
            {/* <img className={styles.course__img} src={img} alt={title} /> */}
            <div className={styles.course__circule}>
              <img className={styles.course__img} src={img} alt={title} />
            </div>
          </div>
        )}
        <div className={styles.course__content}>
          <h3 className={styles.course__title}>{title}</h3>
          <p className={styles.course__desc}>{description}</p>
          <p className={styles.course__price}>${price}</p>
          <button className={styles.course__btn}>View details</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
