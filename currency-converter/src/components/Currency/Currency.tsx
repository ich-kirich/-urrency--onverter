import { Box } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import { ICurrencyProps } from "../../types/types";
import styles from "./Currency.module.scss";
import { changePropertyCurrency, saveCurrencies } from "../../libs/currency";
import { CONTEXT, FAVOURITE_PROPERTY } from "../../libs/constants";
import MoneyFieldCurrency from "../MoneyFieldCurrency/MoneyFieldCurrency";
import NameCurrency from "../NameCurrency/NameCurrency";

function Currency(props: ICurrencyProps) {
  const { currency, amount, listCurrencies, setListCurrency } = props;
  const { currenciesAllNames } = useContext(CONTEXT);

  const updateListCurrency = () => {
    changePropertyCurrency(
      listCurrencies,
      FAVOURITE_PROPERTY,
      currency.shortName,
      setListCurrency,
    );
  };

  const deleteCurrency = () => {
    const newListCurrency = [...listCurrencies].filter(
      (item) => item.shortName !== currency.shortName,
    );
    saveCurrencies(setListCurrency, newListCurrency);
  };
  return (
    <>
      <NameCurrency>{currenciesAllNames[currency.shortName]}</NameCurrency>
      <Box className={styles.currency__wrapper}>
        <StarIcon
          className={
            currency.favourite
              ? styles.currency__favorite
              : styles.currency__unfavored
          }
          onClick={updateListCurrency}
        />
        <MoneyFieldCurrency
          setCurrencyValue={setListCurrency}
          amount={amount}
          currencyValue={currency}
          listCurrency={listCurrencies}
        />
        <CloseIcon
          className={styles.currency__delete}
          onClick={deleteCurrency}
        />
      </Box>
    </>
  );
}

export default Currency;
