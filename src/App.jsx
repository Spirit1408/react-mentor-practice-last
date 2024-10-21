import { Header } from "components";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { setBaseCurrency } from "reduxState/currencySlice";
import { fetchBaseCurrency } from "reduxState/operations";

const Home = lazy(() => import("pages/Home"));
const Rates = lazy(() => import("pages/Rates"));

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		};

		function success(pos) {
			dispatch(fetchBaseCurrency(pos.coords));
		}

		function error(err) {
			console.warn(`ERROR(${err.code}): ${err.message}`);
			dispatch(setBaseCurrency("USD"));
		}

		navigator.permissions
			.query({ name: "geolocation" })
			.then((permissionStatus) => {
				if (permissionStatus.state === "granted") {
					navigator.geolocation.getCurrentPosition(success, error, options);
				}

				permissionStatus.onchange = () => {
					if (permissionStatus.state === "granted") {
						navigator.geolocation.getCurrentPosition(success, error, options);
					} else {
						dispatch(setBaseCurrency("USD"));
					}
				};
			});
	}, [dispatch]);

	return (
		<>
			<Header />

			<Suspense
				fallback={
					<BounceLoader color="#ADCB28" cssOverride={{ margin: "20px auto" }} />
				}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/rates" element={<Rates />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Suspense>
		</>
	);
};
