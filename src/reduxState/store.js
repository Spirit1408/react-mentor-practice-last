import { configureStore } from "@reduxjs/toolkit";
import { currencyReducer } from "./currencySlice";
import storage from "redux-persist/lib/storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import { filterReducer } from "./filterSliced";

const persistConfig = {
	key: "currency",
	version: 1,
	storage,
	whitelist: ["baseCurrency"],
};

const persistedCurrencyReducer = persistReducer(persistConfig, currencyReducer);

const store = configureStore({
	reducer: {
		currency: persistedCurrencyReducer,
		filter: filterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
export default store;
