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
  const { currenciesAllNames } = useContext(Context);
  const [amountMoney, setAmountMoney] = useState(0);
  return (
    <>
      <NameCurrency>
        Base currency: {currenciesAllNames[baseCurrency.shortName]}
      </NameCurrency>
      <Box className={styles.wrapperInpCurrency}>
        <SelectInputCurrency
          setAmountMoney={setAmountMoney}
          currencyValue={baseCurrency}
          setCurrencyValue={setBaseCurrency}
        />
      </Box>
    </>
  );
}

export default BaseCurrency;
