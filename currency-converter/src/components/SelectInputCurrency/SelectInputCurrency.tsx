import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ICurrency } from "../../types/types";
import NameCurrency from "../NameCurrency/NameCurrency";
import SelectCurrencyList from "../SelectCurrencyList/SelectCurrencyList";
import styles from "./SelectInputCurrency.module.scss";

function SelectInputCurrency(props: {
  setAmountMoney: Function;
  currencyValue: ICurrency | ICurrency[];
  setCurrencyValue: Function;
  amountMoney: string;
  currency?: ICurrency;
}) {
  const {
    setAmountMoney,
    currencyValue,
    setCurrencyValue,
    currency,
    amountMoney,
  } = props;
  const [value, setValue] = useState("");
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
      {Object.keys(currency as ICurrency).length !== 0 ? (
        <Box className={styles.inputCurrency}>
          <Typography variant="body1" component="p" className={styles.text}>
            {amountMoney}
          </Typography>
        </Box>
      ) : (
        <TextField
          id="currecny"
          label="Enter a number"
          variant="filled"
          size="medium"
          type="number"
          value={value}
          fullWidth
          onChange={(e) =>
            Number(e.target.value) >= 0 && setValue(e.target.value)
          }
          onKeyUp={() => setAmountMoney(value)}
          className={styles.inputCurrency}
        />
      )}
    </>
  );
}

SelectInputCurrency.defaultProps = {
  currency: {} as ICurrency,
};

export default SelectInputCurrency;
