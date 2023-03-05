import { ICurrency } from "../types/types";

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
