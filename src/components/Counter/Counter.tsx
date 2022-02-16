import styles from './Counter.module.css';

const Counter = ({ initialValue, handler }) => {
	const addItemHandler = () => {
		handler(initialValue + 1);
	};

	const removeItemHandler = () => {
		if (initialValue !== 0) {
			handler(initialValue - 1);
		}
	};

	return (
		<>
			<div className={styles.counter__container}>
				<button className={styles.btn__quantity} onClick={removeItemHandler}>
					-
				</button>
				<span className={styles.counter__number}>{initialValue}</span>
				<button className={styles.btn__quantity} onClick={addItemHandler}>
					+
				</button>
			</div>
		</>
	);
};

export default Counter;
