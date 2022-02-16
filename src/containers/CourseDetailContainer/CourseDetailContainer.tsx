// Dependencies
import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
// Data
import { CourseDetails } from '../../common/types';
import { getCourse } from '../../data/data';
import { CartContext } from '../../context/CartContext';
// Components
import CourseDetail from '../../components/Courses/CourseDetail/CourseDetail';
import Counter from '../../components/Counter/Counter';

const CourseDetailContainer = () => {
	const params = useParams<{ id: string }>();

	console.log(params);

	const { addItem, isInCart } = useContext(CartContext);

	const [loader, setLoader] = useState(true);
	const [details, setDetails] = useState({} as CourseDetails);
	const [quantity, setQuantity] = useState(0);

	const [btnEnabled, setBtnEnabled] = useState(false);
	const [txtBtn, setTxtBtn] = useState('Add to cart');

	const addToCartHandler = () => {
		if (quantity > 0) {
			addItem({
				item: { ...details },
				quantity: quantity,
			});
		}
	};

	useEffect(() => {
		getCourse(params.id).then((course) => {
			setDetails({ ...(course as CourseDetails) });
			setLoader(false);
		});
	}, [params.id]);

	useEffect(() => {
		if (isInCart(details.id)) {
			setTxtBtn('Update in cart');
		} else {
			setTxtBtn('Add to cart');
		}
	}, [details.id]);

	useEffect(() => {
		if (quantity > 0) {
			setBtnEnabled(true);
		} else {
			setBtnEnabled(false);
		}
	}, [quantity]);

	return (
		<>
			{loader ? (
				<h1>Loading...</h1>
			) : (
				<>
					<CourseDetail details={details}>
						<Counter initialValue={quantity} handler={setQuantity} />
						<button disabled={!btnEnabled} onClick={addToCartHandler}>
							{txtBtn}
						</button>
						<Link to="/cart">
							<button disabled={!btnEnabled} onClick={addToCartHandler}>
								Buy now
							</button>
						</Link>
					</CourseDetail>
				</>
			)}
		</>
	);
};

export default CourseDetailContainer;
