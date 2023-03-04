import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { ICurrency } from "../../types/types";
import { Context } from "../../utils/utils";
import NameCurrency from "../NameCurrency/NameCurrency";
import SelectInputCurrency from "../SelectInputCurrency/SelectInputCurrency";
import styles from "./BaseCurrency.module.scss";

function BaseCurrency(props: {
  baseCurrency: ICurrency;
  setBaseCurrency: Function;
}) {
  const { baseCurrency, setBaseCurrency } = props;
  const { currenciesAllNames, amount, setMoney } = useContext(Context);
  return (
    <>
      <NameCurrency>
        Base currency: {currenciesAllNames[baseCurrency.shortName]}
      </NameCurrency>
      <Box className={styles.inputCurrency__wrapper}>
        <SelectInputCurrency
          setAmountMoney={setMoney}
          currencyValue={baseCurrency}
          setCurrencyValue={setBaseCurrency}
          amountMoney={amount}
        />
      </Box>
    </>
  );
}

export default BaseCurrency;
