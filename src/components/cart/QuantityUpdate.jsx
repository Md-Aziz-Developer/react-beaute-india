import { useState } from "react";
import { useDispatch } from 'react-redux';
import { update } from "store/cart/actions";

const QuantityUpdate = ({ quantity, id }) => {
	const dispatch = useDispatch();
	const [counter, setCounter] = useState(quantity);

	const handleIncrement = () => {
		let qty = counter + 1;
		setCounter(qty);
		dispatch(update(id, qty));
	};
	const handleDecrement = () => {
		let qty = counter - 1;
		if (qty > 0) {
			setCounter(qty)
			dispatch(update(id, qty));
		}
	};

	return (
		<div className="wrapper">
			<span onClick={handleDecrement} className='minus'>-</span>
			<span disabled className="num">{counter}</span>
			<span onClick={handleIncrement} className='plus'>+</span>
		</div>
	);
}

export default QuantityUpdate;