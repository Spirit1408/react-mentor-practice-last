import { createSlice } from "@reduxjs/toolkit";
import {
	fetchBaseCurrency,
	getCurrencyRates,
	sendExchangeData,
} from "./operations";

const currencySlice = createSlice({
	name: "currency",
	initialState: {
		baseCurrency: "",
		exchangeInfo: null,
		isLoading: false,
		isError: null,
		rates: [],
	},
	reducers: {
		setBaseCurrency: (state, action) => {
			state.baseCurrency = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
				state.baseCurrency = action.payload;
			})
			.addCase(fetchBaseCurrency.rejected, (_, action) => {
				console.log(action.payload);
			})
			.addCase(sendExchangeData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(sendExchangeData.fulfilled, (state, action) => {
				state.exchangeInfo = action.payload;
				state.isLoading = false;
				state.isError = null;
			})
			.addCase(sendExchangeData.rejected, (state, action) => {
				state.isError = action.payload;
				state.isLoading = false;
				state.exchangeInfo = null;
			})
			.addCase(getCurrencyRates.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCurrencyRates.fulfilled, (state, action) => {
				state.rates = action.payload;
				state.isLoading = false;
			})
			.addCase(getCurrencyRates.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = action.payload;
			});
	},
});

export const { setBaseCurrency } = currencySlice.actions;

export const currencyReducer = currencySlice.reducer;
