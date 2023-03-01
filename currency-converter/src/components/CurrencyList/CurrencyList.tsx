import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Currency from "../Currency/Currency";
import styles from "./CurrencyList.module.scss";
import { getAllCurrencies } from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import { AllCurrencies } from "../../types/types";
import BaseCurrency from "../BaseCurrency/BaseCurrency";

function CurrencyList() {
  const [currencies, setCurrencies] = useState({} as AllCurrencies);
  const [baseCurrency, setBaseCurrency] = useState({
    shortName: "usd",
    favourite: false,
  });
  const listExpml = [
    {
      shortName: "egp",
      favourite: false,
    },
    {
      shortName: "eur",
      favourite: false,
    },
    {
      shortName: "amd",
      favourite: false,
    },
  ];
  const [listCurrencies, setListCurrencies] = useState(listExpml);
  const [fetchCurrencies, isComLoading] = useFetching(async () => {
    const response = await getAllCurrencies();
    setCurrencies(response.data);
  });

  useEffect(() => {
    fetchCurrencies();
  }, []);
  console.log(listCurrencies);
  return (
    <Box className={styles.currencyList}>
      <BaseCurrency
        currencies={currencies}
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
      />
      {listCurrencies.map((currency) => (
        <Currency
          key={currency.shortName}
          currencies={currencies}
          currency={currency}
          listCurrencies={listCurrencies}
          setListCurrencies={setListCurrencies}
        />
      ))}
    </Box>
  );
}

export default CurrencyList;
