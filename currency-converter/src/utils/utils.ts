import React from "react";
import { IContextCurrency, ICurrency } from "../types/types";

export const shortNameProperty = "shortName";
export const favouriteProperty = "favourite";

export const defaultCurrencyList = [
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

export const defaultBaseCurrency = {
  shortName: "usd",
  favourite: false,
};

export const Context = React.createContext({} as IContextCurrency);

export function saveCurrencies(
  setListCurrencies: Function,
  updateListCurrencies: ICurrency[],
) {
  setListCurrencies(updateListCurrencies);
  // localStorage.setItem(keyNotes, JSON.stringify(updateListNotes));
}

export function changePropertyCurrency(
  listCurrencies: ICurrency[],
  propertyToChange: keyof ICurrency,
  shortName: string,
  setListCurrencies: Function,
  value?: string,
) {
  const updateListCurrencies = [...listCurrencies].map(
    (currency: ICurrency) => {
      if (currency.shortName === shortName) {
        if (value) {
          (currency[propertyToChange] as string) = value;
        } else {
          (currency[propertyToChange] as boolean) = !currency[propertyToChange];
        }
      }
      return currency;
    },
  );
  saveCurrencies(setListCurrencies, updateListCurrencies);
}

export function saveBaseCurrency(
  setBaseCurrency: Function,
  value: string,
  baseCurrency: ICurrency,
) {
  baseCurrency.shortName = value as string;
  setBaseCurrency({ ...baseCurrency });
}

export function saveCurrencyToList(
  listCurrencies: ICurrency[],
  setListCurrencies: Function,
  nameCurrency: string,
) {
  listCurrencies = [
    ...listCurrencies,
    {
      shortName: nameCurrency,
      favourite: false,
    },
  ];
  saveCurrencies(setListCurrencies, listCurrencies);
}
