import { useMemo } from "react";
import { ICurrency } from "../types/types";
import { favouriteProperty } from "../utils/utils";

export const useSortedCurrencies = (currencies: ICurrency[], type: string) => {
  const sortedCurrencies = useMemo(() => {
    if (type === favouriteProperty) {
      return [...currencies].sort((x, y) => {
        return Number(y.favourite) - Number(x.favourite);
      });
    }
    return currencies;
  }, [currencies, type]);
  return sortedCurrencies;
};

export default useSortedCurrencies;
