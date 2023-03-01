import { Box } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import Currency from "../Currency/Currency";
import styles from "./CurrencyList.module.scss";
import { getAllCurrencies } from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import { AllCurrencies } from "../../types/types";
import BaseCurrency from "../BaseCurrency/BaseCurrency";
import { useSortedCurrencies } from "../../hooks/useCurrencies";
import {
  Context,
  defaultBaseCurrency,
  defaultCurrencyList,
  favouriteProperty,
} from "../../utils/utils";
import ModalComponent from "../ModalComponent/ModalComponent";
import AddListCurrency from "../AddListCurrency/AddListCurrency";
import AddNewCurrency from "../AddNewCurrency/AddNewCurrency";

function CurrencyList() {
  const [visible, setVisible] = useState(false);
  const [currenciesNames, setCurrenciesNames] = useState({} as AllCurrencies);
  const [baseCurrency, setBaseCurrency] = useState(defaultBaseCurrency);
  const [listCurrencies, setListCurrencies] = useState(defaultCurrencyList);
  const [fetchCurrencies, isComLoading] = useFetching(async () => {
    const response = await getAllCurrencies();
    setCurrenciesNames(response.data);
  });

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const sortedListCurrencies = useSortedCurrencies(
    listCurrencies,
    favouriteProperty,
  );

  const contextValue = useMemo(
    () => ({ currenciesAllNames: currenciesNames }),
    [currenciesNames],
  );

  return (
    <Context.Provider value={contextValue}>
      <Box className={styles.currencyList}>
        <BaseCurrency
          baseCurrency={baseCurrency}
          setBaseCurrency={setBaseCurrency}
        />
        {sortedListCurrencies.map((currency) => (
          <Currency
            key={currency.shortName}
            currency={currency}
            listCurrencies={sortedListCurrencies}
            setListCurrencies={setListCurrencies}
          />
        ))}
        <AddNewCurrency setVisible={setVisible} />
        <ModalComponent visible={visible} setVisible={setVisible}>
          <AddListCurrency
            listCurrencies={sortedListCurrencies}
            setListCurrencies={setListCurrencies}
          />
        </ModalComponent>
      </Box>
    </Context.Provider>
  );
}

export default CurrencyList;
