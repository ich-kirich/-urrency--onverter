import { Box } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import Currency from "../Currency/Currency";
import styles from "./CurrencyList.module.scss";
import { getAllCurrencies, getRateCurrency } from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import { AllCurrencies, Rates } from "../../types/types";
import BaseCurrency from "../BaseCurrency/BaseCurrency";
import { useSortedCurrencies } from "../../hooks/useCurrencies";
import {
  CONTEXT,
  DEFAULT_BASE_LIST,
  DEFAULT_CURRENCY_LIST,
  FAVOURITE_PROPERTY,
} from "../../libs/constants";
import ModalComponent from "../ModalComponent/ModalComponent";
import AddListCurrency from "../AddListCurrency/AddListCurrency";
import AddNewCurrency from "../AddNewCurrency/AddNewCurrency";
import Loader from "../Loader/Loader";
import ViewError from "../ViewError/ViewError";

function CurrencyList() {
  const [visible, setVisible] = useState(false);
  const [currenciesNames, setCurrenciesNames] = useState({} as AllCurrencies);
  const [baseCurrencyRates, setBaseCurrencyRates] = useState({} as Rates);
  const [baseCurrency, setBaseCurrency] = useState(DEFAULT_BASE_LIST);
  const [listCurrencies, setListCurrencies] = useState(DEFAULT_CURRENCY_LIST);
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
  const [amountMoney, setAmountMoney] = useState("");

  useEffect(() => {
    fetchCurrencies();
    fetchCurrency();
  }, []);

  useEffect(() => {
    fetchCurrency();
  }, [baseCurrency]);

  const sortedListCurrencies = useSortedCurrencies(
    listCurrencies,
    FAVOURITE_PROPERTY,
  );

  const contextValue = useMemo(
    () => ({
      currenciesAllNames: currenciesNames,
      amount: amountMoney,
      setMoney: setAmountMoney,
    }),
    [currenciesNames, amountMoney, setAmountMoney],
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
            <Box className={styles.currency__selector}>
              <BaseCurrency
                baseCurrency={baseCurrency}
                setBaseCurrency={setBaseCurrency}
              />
              {sortedListCurrencies.map((item) => (
                <Currency
                  key={item.shortName}
                  currency={item}
                  amount={
                    Object.keys(baseCurrencyRates).length !== 0 &&
                    baseCurrencyRates[baseCurrency.shortName]
                      ? String(
                          Number(amountMoney) *
                            baseCurrencyRates[baseCurrency.shortName][
                              item.shortName
                            ],
                        )
                      : ""
                  }
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
          )}
        </Box>
      )}
    </CONTEXT.Provider>
  );
}

export default CurrencyList;
