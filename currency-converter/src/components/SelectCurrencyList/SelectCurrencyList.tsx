import { NativeSelect } from "@mui/material";
import { useContext } from "react";
import { ISelectCurrencyListProps } from "../../types/types";
import { changePropertyCurrency, saveBaseCurrency } from "../../libs/currency";
import { CONTEXT, SHORT_NAME_PROPERTY } from "../../libs/constants";
import styles from "./SelectCurrencyList.module.scss";

function SelectCurrencyList(props: ISelectCurrencyListProps) {
  const { currenciesAllNames } = useContext(CONTEXT);
  const { chooseCurrency, currencyValue, setCurrencyValue, listCurrency } =
    props;

  const changeCurrency = (value: string) => {
    if (listCurrency) {
      changePropertyCurrency(
        listCurrency,
        SHORT_NAME_PROPERTY,
        chooseCurrency,
        setCurrencyValue,
        value,
      );
    } else {
      saveBaseCurrency(setCurrencyValue, value, currencyValue!);
    }
  };

  const isChosen = (name: string) => {
    if (listCurrency) {
      return listCurrency.some((item) => item.shortName === name);
    }
    return currencyValue!.shortName === name;
  };

  return (
    <NativeSelect
      value={chooseCurrency}
      className={styles.currency__select}
      onChange={(e) => changeCurrency(e.target.value)}
    >
      {Object.keys(currenciesAllNames).map((item) => (
        <option key={item} value={item} disabled={isChosen(item)}>
          {item}
        </option>
      ))}
    </NativeSelect>
  );
}

export default SelectCurrencyList;
