import axios from "axios";
import { BASE_URL } from "../libs/constants";

export async function getRateCurrency(currency: string) {
  const response = await axios.get(`${BASE_URL}/currencies/${currency}.json`);
  return response;
}

export async function getAllCurrencies() {
  const response = await axios.get(`${BASE_URL}/currencies.json`);
  return response;
}

export async function getCoupleCurrencies(
  currencyFrom: string,
  currencyTo: string,
) {
  const response = await axios.get(
    `${BASE_URL}/currencies/${currencyFrom}/${currencyTo}.json`,
  );
  return response;
}
