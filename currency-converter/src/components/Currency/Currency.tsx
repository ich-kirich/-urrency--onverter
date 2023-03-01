import { Box } from "@mui/material";
import { useContext, useState } from "react";
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
  listCurrencies: ICurrency[];
  setListCurrencies: Function;
}) {
  const { currency, listCurrencies, setListCurrencies } = props;
  const { currenciesAllNames } = useContext(Context);
  const [amountMoney, setAmountMoney] = useState(0);

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
      <Box className={styles.wrapperInpCurrency}>
        <StarIcon
          className={
            currency.favourite ? styles.isFavorite : styles.notFavorite
          }
          onClick={updateListCurrency}
        />
        <SelectInputCurrency
          setAmountMoney={setAmountMoney}
          currencyValue={listCurrencies}
          setCurrencyValue={setListCurrencies}
          currency={currency}
        />
        <CloseIcon className={styles.deleteCurrency} onClick={deleteCurrency} />
      </Box>
    </>
  );
}

export default Currency;
