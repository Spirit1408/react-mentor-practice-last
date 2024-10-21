import { Wave } from "react-animated-text";
import { Container, Filter, Heading, RatesList, Section } from "components";
import { useDispatch, useSelector } from "react-redux";
import {
	selectBaseCurrency,
	selectFilteredRates,
	selectIsError,
} from "reduxState/selectors";
import { useEffect } from "react";
import { getCurrencyRates } from "reduxState/operations";

const Rates = () => {
	const isError = useSelector(selectIsError);
	const baseCurrency = useSelector(selectBaseCurrency);
	const rates = useSelector(selectFilteredRates);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrencyRates(baseCurrency));
	}, [dispatch, baseCurrency]);

	return (
		<Section>
			<Container>
				<Heading
					info
					bottom
					title={
						<Wave
							text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
							effect="fadeOut"
							effectChange={4.0}
						/>
					}
				/>

				<Filter />

				{rates.length > 0 && <RatesList rates={rates} />}

				{isError && (
					<Heading
						error
						title="Something went wrong...😐 We cannot show current rates!"
					/>
				)}
			</Container>
		</Section>
	);
};

export default Rates;
