import { Box } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { getAllCurrencies, getRateCurrency } from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import { AllCurrencies, Rates } from "../../types/types";
import {
  CONTEXT,
  DEFAULT_BASE_CURRENCY,
  FAVOURITE_PROPERTY,
} from "../../libs/constants";
import Loader from "../Loader/Loader";
import ViewError from "../ViewError/ViewError";
import CurrencyBlock from "../CurrencyBlock/CurrencyBlock";
import { useSortedCurrencies } from "../../hooks/useCurrencies";
import { loadBaseCurrency, loadFavouriteCurrencies } from "../../libs/currency";

function MainPage() {
  const [currenciesNames, setCurrenciesNames] = useState({} as AllCurrencies);
  const [baseCurrencyRates, setBaseCurrencyRates] = useState({} as Rates);
  const [baseCurrency, setBaseCurrency] = useState(loadBaseCurrency());
  const [amountMoney, setAmountMoney] = useState("");
  const [listCurrencies, setListCurrencies] = useState(
    loadFavouriteCurrencies(),
  );
  const sortedListCurrencies = useSortedCurrencies(
    listCurrencies,
    FAVOURITE_PROPERTY,
  );

  const [fetchCurrencies, isAllCurrLoading, isErrorAllCurr] = useFetching(
    async () => {
      const response = await getAllCurrencies();
      setCurrenciesNames({ ...response.data });
    },
  );

  const [fetchCurrency, isCurrLoading, isErrorCurr] = useFetching(async () => {
    const response = await getRateCurrency(baseCurrency.shortName);
    setBaseCurrencyRates({ ...response.data });
  });

  useEffect(() => {
    fetchCurrencies();
    fetchCurrency();
  }, []);

  useEffect(() => {
    fetchCurrency();
  }, [baseCurrency]);

  const contextValue = useMemo(
    () => ({
      currenciesAllNames: currenciesNames,
      amount: amountMoney,
      setMoney: setAmountMoney,
      listCurrencies: sortedListCurrencies,
      setListCurrency: setListCurrencies,
    }),
    [
      currenciesNames,
      amountMoney,
      setAmountMoney,
      sortedListCurrencies,
      setListCurrencies,
    ],
  );

  return (
    <CONTEXT.Provider value={contextValue}>
      {isErrorAllCurr || isErrorCurr ? (
        <ViewError>{isErrorAllCurr || isErrorCurr}</ViewError>
      ) : (
        <Box>
          {isCurrLoading || isAllCurrLoading ? (
            <Loader />
          ) : (
            <CurrencyBlock
              baseCurrency={baseCurrency}
              setBaseCurrency={setBaseCurrency}
              baseCurrencyRates={baseCurrencyRates}
            />
          )}
        </Box>
      )}
    </CONTEXT.Provider>
  );
}

export default MainPage;
