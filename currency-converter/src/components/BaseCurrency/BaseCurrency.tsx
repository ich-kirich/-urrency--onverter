import { Typography, Box, TextField } from "@mui/material";
import { useState } from "react";
import { AllCurrencies, ICurrency } from "../../types/types";
import SelectCurrencyList from "../SelectCurrencyList/SelectCurrencyList";
import styles from "./BaseCurrency.module.scss";

function BaseCurrency(props: {
  currencies: AllCurrencies;
  baseCurrency: ICurrency;
  setBaseCurrency: Function;
}) {
  const { currencies, baseCurrency, setBaseCurrency } = props;
  const [amountMoney, setAmountMoney] = useState(0);
  return (
    <>
      <Typography variant="h6" component="h1" className={styles.text}>
        Base currency: {currencies[baseCurrency.shortName]}
      </Typography>
      <Box className={styles.wrapperInpCurrency}>
        <SelectCurrencyList
          currencies={currencies}
          chooseCurrency={baseCurrency.shortName}
          currenciesValue={baseCurrency}
          setCurrencies={setBaseCurrency}
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
      </Box>
    </>
  );
}

export default BaseCurrency;
