import React from "react";
import { IContextCurrency } from "../types/types";

export const SHORT_NAME_PROPERTY = "shortName";
export const FAVOURITE_PROPERTY = "favourite";
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
export const DEFAULT_BASE_LIST = {
  shortName: "usd",
  favourite: false,
};

export const CONTEXT = React.createContext({} as IContextCurrency);
