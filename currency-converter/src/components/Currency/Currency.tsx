import { Typography, Box, TextField } from "@mui/material";
import { useState } from "react";
import AllCurrencies from "../../types/types";
import SelectCurrencyList from "../SelectCurrencyList/SelectCurrencyList";
import styles from "./Currency.module.scss";

function Currency(props: {
  currencies: AllCurrencies;
  typeCurrency: string;
  isBaseCurrency?: boolean;
}) {
  const { currencies, typeCurrency, isBaseCurrency } = props;
  const [chooseCurrency, setChooseCurrency] = useState(typeCurrency);
  const [amountMoney, setAmountMoney] = useState(0);
  return (
    <>
      <Typography variant="h6" component="h1" className={styles.text}>
        {isBaseCurrency
          ? `Base currency: ${currencies[chooseCurrency]}`
          : currencies[chooseCurrency]}
      </Typography>
      <Box className={styles.wrapperInpCurrency}>
        <SelectCurrencyList
          currencies={currencies}
          chooseCurrency={chooseCurrency}
          setChooseCurrency={setChooseCurrency}
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

Currency.defaultProps = {
  isBaseCurrency: false,
};

export default Currency;
