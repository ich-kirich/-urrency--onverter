import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ICurrency, IMoneyFieldCurrencyProps } from "../../types/types";
import SelectCurrencyList from "../SelectCurrencyList/SelectCurrencyList";
import styles from "./MoneyFieldCurrency.module.scss";

function MoneyFieldCurrency(props: IMoneyFieldCurrencyProps) {
  const { setMoney, currencyValue, setCurrencyValue, currency, amount } = props;
  const [value, setValue] = useState(amount);
  return (
    <>
      <SelectCurrencyList
        chooseCurrency={
          Array.isArray(currencyValue)
            ? (currency as ICurrency).shortName
            : (currencyValue as ICurrency).shortName
        }
        currencyValue={currencyValue}
        setCurrencyValue={setCurrencyValue}
      />
      {Object.keys(currency as ICurrency).length === 0 ? (
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
          onKeyUp={() => setMoney(value)}
          className={styles.currency__input}
        />
      ) : (
        <Box className={styles.currency__input}>
          <Typography
            variant="body1"
            component="p"
            className={styles.currency__amount}
          >
            {amount}
          </Typography>
        </Box>
      )}
    </>
  );
}

MoneyFieldCurrency.defaultProps = {
  currency: {} as ICurrency,
};

export default MoneyFieldCurrency;
