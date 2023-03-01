import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Currency from "../Currency/Currency";
import styles from "./CurrencyList.module.scss";
import { getAllCurrencies } from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import { AllCurrencies } from "../../types/types";
import BaseCurrency from "../BaseCurrency/BaseCurrency";
import { useSortedCurrencies } from "../../hooks/useCurrencies";
import { favouriteProperty } from "../../utils/utils";
import ModalComponent from "../ModalComponent/ModalComponent";
import AddListCurrency from "../AddListCurrency/AddListCurrency";

function CurrencyList() {
  const [visible, setVisible] = useState(false);
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

  const sortedListCurrencies = useSortedCurrencies(
    listCurrencies,
    favouriteProperty,
  );

  return (
    <Box className={styles.currencyList}>
      <BaseCurrency
        currencies={currencies}
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
      />
      {sortedListCurrencies.map((currency) => (
        <Currency
          key={currency.shortName}
          currencies={currencies}
          currency={currency}
          listCurrencies={sortedListCurrencies}
          setListCurrencies={setListCurrencies}
        />
      ))}
      <Box className={styles.wrapperAddCurrency}>
        <Box
          className={styles.addCurrency}
          onClick={(e) => {
            e.stopPropagation();
            setVisible(true);
          }}
        >
          <ControlPointIcon />
          Add Currency
        </Box>
      </Box>
      <ModalComponent visible={visible} setVisible={setVisible}>
        <AddListCurrency
          currencies={currencies}
          listCurrencies={sortedListCurrencies}
          setListCurrencies={setListCurrencies}
        />
      </ModalComponent>
    </Box>
  );
}

export default CurrencyList;
