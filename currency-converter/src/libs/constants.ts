import React from "react";
import { IContextCurrency } from "../types/types";

export const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest";
export const SHORT_NAME_PROPERTY = "shortName";
export const FAVOURITE_PROPERTY = "favourite";
export const KEY_FAVOURITES = "favouriteCurrencies";
export const KEY_BASE = "baseCurrency";
export const DEFAULT_EUR = "eur";
export const DEFAULT_USD = "usd";
export const DEFAULT_CURRENCY_LIST = [
  {
    shortName: "egp",
    favourite: false,
  },
  {
    shortName: "eur",
    favourite: false,
  },
  {
    shortName: "amd",
    favourite: false,
  },
];

export const DEFAULT_BASE_CURRENCY = {
  shortName: "usd",
  favourite: false,
};

export const CONTEXT = React.createContext({} as IContextCurrency);
