import { Box } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import { ICurrency } from "../../types/types";
import styles from "./Currency.module.scss";
import {
  changePropertyCurrency,
  Context,
  favouriteProperty,
  saveCurrencies,
} from "../../utils/utils";
import SelectInputCurrency from "../SelectInputCurrency/SelectInputCurrency";
import NameCurrency from "../NameCurrency/NameCurrency";

function Currency(props: {
  currency: ICurrency;
  amount: string;
  listCurrencies: ICurrency[];
  setListCurrencies: Function;
}) {
  const { currency, amount, listCurrencies, setListCurrencies } = props;
  const { currenciesAllNames, setMoney } = useContext(Context);

  const updateListCurrency = () => {
    changePropertyCurrency(
      listCurrencies,
      favouriteProperty,
      currency.shortName,
      setListCurrencies,
    );
  };

  const deleteCurrency = () => {
    const newListCurrency = [...listCurrencies].filter(
      (elem) => elem.shortName !== currency.shortName,
    );
    saveCurrencies(setListCurrencies, newListCurrency);
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
        <SelectInputCurrency
          setAmountMoney={setMoney}
          currencyValue={listCurrencies}
          setCurrencyValue={setListCurrencies}
          amountMoney={amount}
          currency={currency}
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
