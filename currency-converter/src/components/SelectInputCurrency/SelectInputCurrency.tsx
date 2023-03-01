import { TextField } from "@mui/material";
import { ICurrency } from "../../types/types";
import SelectCurrencyList from "../SelectCurrencyList/SelectCurrencyList";
import styles from "./SelectInputCurrency.module.scss";

function SelectInputCurrency(props: {
  setAmountMoney: Function;
  currencyValue: ICurrency | ICurrency[];
  setCurrencyValue: Function;
  currency?: ICurrency;
}) {
  const { setAmountMoney, currencyValue, setCurrencyValue, currency } = props;
  return (
    <>
      <SelectCurrencyList
        chooseCurrency={
          Array.isArray(currencyValue)
            ? (currency as ICurrency).shortName
            : (currencyValue as ICurrency).shortName
        }
        currenciesValue={currencyValue}
        setCurrencies={setCurrencyValue}
      />
      <TextField
        id="currecny"
        label="Enter a number"
        variant="filled"
        size="medium"
        type="number"
        fullWidth
        onChange={(e) =>
          Number(e.target.value) < 0
            ? setAmountMoney(0)
            : setAmountMoney(Number(e.target.value))
        }
        className={styles.inputCurrency}
      />
    </>
  );
}

SelectInputCurrency.defaultProps = {
  currency: {} as ICurrency,
};

export default SelectInputCurrency;
