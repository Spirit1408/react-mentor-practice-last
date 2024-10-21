import { createAsyncThunk } from "@reduxjs/toolkit";
import { exchangeCurrency, latestRates } from "service/exchangeAPI";
import { getUserInfo } from "service/opencagedataApi";

export const fetchBaseCurrency = createAsyncThunk(
	"currency/fetchBaseCurrency",
	async (coords, thunkAPI) => {
		try {
			const response = await getUserInfo(coords);
			return response.results[0].annotations.currency.iso_code;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const sendExchangeData = createAsyncThunk(
	"currency/sendExchangeData",
	async (data, thunkAPI) => {
		try {
			const response = await exchangeCurrency(data);
			console.log(response)
			return response;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const getCurrencyRates = createAsyncThunk(
	"currency/getCurrencyRates",
	async (baseCurrency, thunkAPI) => {
		try {
			const response = await latestRates(baseCurrency);
			return response;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
)