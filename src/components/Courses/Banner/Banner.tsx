import styles from "./Banner.module.css";

const Banner = ({ categoryHeader }) => {
  return (
    <div className={styles.banner__container}>
      <h1>{categoryHeader}</h1>
    </div>
  );
};

export default Banner;
