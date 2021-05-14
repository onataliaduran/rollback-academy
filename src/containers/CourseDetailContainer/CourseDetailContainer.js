// Dependencies
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
// Data
import { getCourse } from "../../data/data";
import { CartContext } from "../../context/CartContext";
// Components
import CourseDetail from "../../components/Courses/CourseDetail/CourseDetail";
import Counter from "../../components/Counter/Counter";

const CourseDetailContainer = () => {
  const params = useParams();
  const { addItem, isInCart } = useContext(CartContext);

  const [loader, setLoader] = useState(true);
  const [details, setDetails] = useState({});
  const [quantity, setQuantity] = useState(0);

  const [addToCartEnabled, setAddToCartEnabled] = useState(false);
  const [txtBtn, setTxtBtn] = useState("Add to cart");

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
      setDetails({ ...course });
      setLoader(false);
    });
  }, [params.id]);

  useEffect(() => {
    if (isInCart(details.id)) {
      setTxtBtn("Update in cart");
    } else {
      setTxtBtn("Add to cart");
    }
  }, [details.id]);

  useEffect(() => {
    if (quantity > 0) {
      setAddToCartEnabled(true);
    } else {
      setAddToCartEnabled(false);
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
            <button disabled={!addToCartEnabled} onClick={addToCartHandler}>
              {txtBtn}
            </button>
          </CourseDetail>
        </>
      )}
    </>
  );
};

export default CourseDetailContainer;
