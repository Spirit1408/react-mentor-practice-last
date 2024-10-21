import Select from "react-select";
import symbols from "./symbols.json";
import styles from "./SelectRates.module.css";
import { setBaseCurrency } from "reduxState/currencySlice";
import { useDispatch } from "react-redux";
import "./ReactSelect.css";

export const SelectRates = ({ baseCurrency }) => {
	const options = symbols;
	const dispatch = useDispatch();

	const handleChange = (selectedOption) => {
		dispatch(setBaseCurrency(selectedOption.value));
	};

	return (
		<div className={styles.box}>
			<p className={styles.text}>Your base currency:&nbsp;</p>
			<Select
				className={styles.select}
				classNamePrefix="react-select"
				isSearchable
				value={{
					value: baseCurrency,
					label: baseCurrency,
				}}
				options={options}
				onChange={handleChange}
			/>
		</div>
	);
};
