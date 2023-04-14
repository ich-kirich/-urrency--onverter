import { Box, Typography } from "@mui/material";
import { IMoneyFieldCurrencyProps } from "../../types/types";
import SelectCurrencyList from "../SelectCurrencyList/SelectCurrencyList";
import styles from "./MoneyFieldCurrency.module.scss";

function MoneyFieldCurrency(props: IMoneyFieldCurrencyProps) {
  const { amount, currencyValue, setCurrencyValue, listCurrency } = props;
  return (
    <>
      <SelectCurrencyList
        chooseCurrency={currencyValue!.shortName}
        setCurrencyValue={setCurrencyValue}
        listCurrency={listCurrency}
      />
      <Box className={styles.currency__input}>
        <Typography
          variant="body1"
          component="p"
          className={styles.currency__amount}
        >
          {amount}
        </Typography>
      </Box>
    </>
  );
}

export default MoneyFieldCurrency;
