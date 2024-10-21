import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "reduxState/filterSliced";
import { selectFilter } from "reduxState/selectors";

export const Filter = () => {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilter);

	return (
		<input
			placeholder="What currency are you looking for?🧐"
			className={styles.input}
			value={filter}
			onChange={(e) => dispatch(setFilter(e.target.value))}
		/>
	);
};
