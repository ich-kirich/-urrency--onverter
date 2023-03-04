import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { IBaseCurrencyProps, ICurrency } from "../../types/types";
import { Context } from "../../utils/utils";
import NameCurrency from "../NameCurrency/NameCurrency";
import MoneyFieldCurrency from "../MoneyFieldCurrency/MoneyFieldCurrency";
import styles from "./BaseCurrency.module.scss";

function BaseCurrency(props: IBaseCurrencyProps) {
  const { baseCurrency, setBaseCurrency } = props;
  const { currenciesAllNames, amount, setMoney } = useContext(Context);
  return (
    <>
      <NameCurrency>
        Base currency: {currenciesAllNames[baseCurrency.shortName]}
      </NameCurrency>
      <Box className={styles.inputCurrency__wrapper}>
        <MoneyFieldCurrency
          setMoney={setMoney}
          currencyValue={baseCurrency}
          setCurrencyValue={setBaseCurrency}
          amount={amount}
        />
      </Box>
    </>
  );
}

export default BaseCurrency;
