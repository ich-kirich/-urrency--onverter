import { NativeSelect } from "@mui/material";
import { AllCurrencies, ICurrency } from "../../types/types";
import {
  changePropertyCurrency,
  saveBaseCurrency,
  shortNameProperty,
} from "../../utils/utils";
import styles from "./SelectCurrencyList.module.scss";

function SelectCurrencyList(props: {
  currencies: AllCurrencies;
  chooseCurrency: string;
  setCurrencies: Function;
  currenciesValue: ICurrency | ICurrency[];
}) {
  const { currencies, chooseCurrency, currenciesValue, setCurrencies } = props;

  const updateListCurrency = (value: string, shortName: string) => {
    changePropertyCurrency(
      currenciesValue as ICurrency[],
      shortNameProperty,
      shortName,
      setCurrencies,
      value,
    );
  };

  const updateBaseCurrency = (value: string) => {
    saveBaseCurrency(setCurrencies, value, currenciesValue as ICurrency);
  };

  return (
    <NativeSelect
      value={chooseCurrency}
      className={styles.selectCurrency}
      onChange={
        !Array.isArray(currenciesValue)
          ? (e) => updateBaseCurrency(e.target.value)
          : (e) => updateListCurrency(e.target.value, chooseCurrency)
      }
    >
      {Object.keys(currencies).map((elem) => (
        <option
          key={elem}
          value={elem}
          disabled={
            Array.isArray(currenciesValue)
              ? (currenciesValue as ICurrency[]).some(
                  (currency) => currency.shortName === elem,
                )
              : (currenciesValue as ICurrency).shortName === elem
          }
        >
          {elem}
        </option>
      ))}
    </NativeSelect>
  );
}

export default SelectCurrencyList;
