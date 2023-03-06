import axios from "axios";

export async function getRateCurrency(currency: string) {
  const response = await axios.get(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
  );
  return response;
}

export async function getAllCurrencies() {
  const response = await axios.get(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`,
  );
  return response;
}

export async function getCoupleCurrencies(
  currencyFrom: string,
  currencyTo: string,
) {
  const response = await axios.get(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyFrom}/${currencyTo}.json`,
  );
  return response;
}
