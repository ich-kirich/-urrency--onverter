import { NativeSelect } from "@mui/material";
import { useContext } from "react";
import { ICurrency, ISelectCurrencyListProps } from "../../types/types";
import { changePropertyCurrency, saveBaseCurrency } from "../../libs/currency";
import { CONTEXT, SHORT_NAME_PROPERTY } from "../../libs/constants";
import styles from "./SelectCurrencyList.module.scss";

function SelectCurrencyList(props: ISelectCurrencyListProps) {
  const { currenciesAllNames } = useContext(CONTEXT);
  const { chooseCurrency, currencyValue, setCurrencyValue } = props;

  const updateListCurrency = (value: string, shortName: string) => {
    changePropertyCurrency(
      currencyValue as ICurrency[],
      SHORT_NAME_PROPERTY,
      shortName,
      setCurrencyValue,
      value,
    );
  };

  const updateBaseCurrency = (value: string) => {
    saveBaseCurrency(setCurrencyValue, value, currencyValue as ICurrency);
  };

  return (
    <NativeSelect
      value={chooseCurrency}
      className={styles.currency__select}
      onChange={
        Array.isArray(currencyValue)
          ? (e) => updateListCurrency(e.target.value, chooseCurrency)
          : (e) => updateBaseCurrency(e.target.value)
      }
    >
      {Object.keys(currenciesAllNames).map((item) => (
        <option
          key={item}
          value={item}
          disabled={
            Array.isArray(currencyValue)
              ? (currencyValue as ICurrency[]).some(
                  (currency) => currency.shortName === item,
                )
              : (currencyValue as ICurrency).shortName === item
          }
        >
          {item}
        </option>
      ))}
    </NativeSelect>
  );
}

export default SelectCurrencyList;
