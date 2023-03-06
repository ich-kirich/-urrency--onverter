import { ICurrency } from "../types/types";
import {
  DEFAULT_BASE_CURRENCY,
  DEFAULT_CURRENCY_LIST,
  KEY_BASE,
  KEY_FAVOURITES,
} from "./constants";

export function saveToLocalStorageFavourites(listCurrencies: ICurrency[]) {
  const favouriteList = listCurrencies.filter((item) => item.favourite);
  localStorage.setItem(KEY_FAVOURITES, JSON.stringify(favouriteList));
}

export function loadFavouriteCurrencies() {
  if (localStorage.getItem(KEY_FAVOURITES)) {
    const favouriteList: ICurrency[] = JSON.parse(
      localStorage.getItem(KEY_FAVOURITES)!,
    );
    if (favouriteList.length > 0) {
      return favouriteList;
    }
    return DEFAULT_CURRENCY_LIST;
  }
  return DEFAULT_CURRENCY_LIST;
}

export function loadBaseCurrency() {
  if (localStorage.getItem(KEY_BASE)) {
    return JSON.parse(localStorage.getItem(KEY_BASE)!);
  }
  return DEFAULT_BASE_CURRENCY;
}

export function saveCurrencies(
  setListCurrencies: Function,
  updateListCurrencies: ICurrency[],
) {
  setListCurrencies(updateListCurrencies);
  saveToLocalStorageFavourites(updateListCurrencies);
}

export function changePropertyCurrency(
  listCurrencies: ICurrency[],
  propertyToChange: keyof ICurrency,
  shortName: string,
  setListCurrencies: Function,
  value?: string,
) {
  const updateListCurrencies = [...listCurrencies].map((item: ICurrency) => {
    if (item.shortName === shortName) {
      if (value) {
        (item[propertyToChange] as string) = value;
      } else {
        (item[propertyToChange] as boolean) = !item[propertyToChange];
      }
    }
    return item;
  });
  saveCurrencies(setListCurrencies, updateListCurrencies);
}

export function saveBaseCurrency(
  setBaseCurrency: Function,
  value: string,
  baseCurrency: ICurrency,
) {
  baseCurrency.shortName = value;
  setBaseCurrency({ ...baseCurrency });
  localStorage.setItem(KEY_BASE, JSON.stringify({ ...baseCurrency }));
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
