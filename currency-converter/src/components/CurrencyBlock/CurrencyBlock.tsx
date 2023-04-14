import { Box } from "@mui/material";
import styles from "./CurrencyBlock.module.scss";
import BaseCurrency from "../BaseCurrency/BaseCurrency";
import NewCurrencies from "../NewCurrencies/NewCurrencies";
import CurrencyList from "../CurrencyList/CurrencyList";
import { ICurrencyBlockProps } from "../../types/types";

function CurrencyBlock(props: ICurrencyBlockProps) {
  const { baseCurrency, setBaseCurrency, baseCurrencyRates } = props;

  return (
    <Box className={styles.currency__selector}>
      <BaseCurrency
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
      />
      <CurrencyList
        baseCurrencyRates={baseCurrencyRates}
        baseCurrency={baseCurrency}
      />
      <NewCurrencies />
    </Box>
  );
}

export default CurrencyBlock;
