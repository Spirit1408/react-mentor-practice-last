import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "reduxState/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</BrowserRouter>
		</PersistGate>
	</Provider>,
);
