import { ICurrency } from "../types/types";

export const shortNameProperty = "shortName";
export const favouriteProperty = "favourite";

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
