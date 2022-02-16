import styles from './CourseDetail.module.css';

export const CourseDetail = ({ details, children }) => {
	return (
		<div className={styles.details__grid}>
			<div className={styles.details__imgCont}>
				<img
					src={details.img}
					alt={details.title}
					className={styles.details__img}
				/>
			</div>
			<div className={styles.details__infoCont}>
				<h1 className={styles.details__title}>{details.title} </h1>
				<p className={styles.details__price}>{details.price}</p>
				<p className={styles.details__description}>{details.description}</p>

				<div className={styles.details__btnGroup}>
					<div className={styles.details__counter}>{children[0]}</div>
					<div className={styles.details__btnAddToCart}>{children[1]}</div>
					<div className={styles.details__btnBuyNow}>{children[2]}</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetail;
