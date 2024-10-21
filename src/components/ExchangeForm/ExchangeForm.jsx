import { RiExchangeDollarFill } from "react-icons/ri";
import styles from "./ExchangeForm.module.css";
import { useDispatch } from "react-redux";
import { sendExchangeData } from "reduxState/operations";

export const ExchangeForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const query = form.query.value.trim().split(" ");
		const res = {
			amount: query[0],
			from: query[1].toUpperCase(),
			to: query[3].toUpperCase(),
		};
		dispatch(sendExchangeData(res));
		form.reset();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<button className={styles.button} type="submit">
				<RiExchangeDollarFill className={styles.icon} />
			</button>

			<input
				title="Request format 15 USD in UAH"
				className={styles.input}
				name="query"
				pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
				required
			/>
		</form>
	);
};
