import { Typography, TextField, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { getAllCurrencies } from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import AllCurrencies from "../../types/types";
import SelectCurrencyList from "../SelectCurrencyList/SelectCurrencyList";
import styles from "./BaseCurrency.module.scss";

function BaseCurrency() {
  const [currencies, setCurrencies] = useState({} as AllCurrencies);
  const [chooseCurrency, setChooseCurrency] = useState("usd");
  const [fetchCurrencies, isComLoading] = useFetching(async () => {
    const response = await getAllCurrencies();
    setCurrencies(response.data);
  });
  const [amountMoney, setAmountMoney] = useState(0);

  useEffect(() => {
    fetchCurrencies();
  }, []);
  console.log(amountMoney);
  return (
    <>
      <Typography variant="h6" component="h1" className={styles.text}>
        Base currency: {currencies[chooseCurrency]}
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

export default BaseCurrency;
