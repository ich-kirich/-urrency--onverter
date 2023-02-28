import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Currency from "../Currency/Currency";
import styles from "./CurrencyList.module.scss";
import { getAllCurrencies } from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import AllCurrencies from "../../types/types";

function CurrencyList() {
  const [currencies, setCurrencies] = useState({} as AllCurrencies);
  const [fetchCurrencies, isComLoading] = useFetching(async () => {
    const response = await getAllCurrencies();
    setCurrencies(response.data);
  });

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <Box className={styles.currencyList}>
      <Currency currencies={currencies} typeCurrency="usd" isBaseCurrency />
      <Currency currencies={currencies} typeCurrency="eur" />
    </Box>
  );
}

export default CurrencyList;
