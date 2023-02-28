import { Box, TextField, Typography } from "@mui/material";
import BaseCurrency from "../BaseCurrency/BaseCurrency";
import styles from "./CurrencyList.module.scss";

function CurrencyList() {
  return (
    <Box className={styles.currencyList}>
      <BaseCurrency />
    </Box>
  );
}

export default CurrencyList;
