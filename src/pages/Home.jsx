import {
	Container,
	ExchangeForm,
	ExchangeInfo,
	Heading,
	Section,
} from "components";
import { useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";
import {
	selectIsError,
	selectIsLoading,
	selectExchangeInfo,
} from "reduxState/selectors";

const Home = () => {
	const isError = useSelector(selectIsError);
	const isLoading = useSelector(selectIsLoading);
	const exchangeInfo = useSelector(selectExchangeInfo);

	return (
		<Section>
			<Container>
				<Heading info title="What currencies do you want to exchange?🙂" />

				<ExchangeForm />

				{isLoading ? (
					<BounceLoader color="#ADCB28" cssOverride={{ margin: "20px auto" }} />
				) : exchangeInfo ? (
					<ExchangeInfo exchangeInfo={exchangeInfo} />
				) : null}

				{isError && (
					<Heading
						error
						title="Something went wrong...😐 Check the data validity and try again!"
					/>
				)}
			</Container>
		</Section>
	);
};

export default Home;
