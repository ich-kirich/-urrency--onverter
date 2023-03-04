import { List, ListItem, ListItemText } from "@mui/material";
import { useContext } from "react";
import { IListCurrencies } from "../../types/types";
import { saveCurrencyToList } from "../../libs/currency";
import { CONTEXT } from "../../libs/constants";
import styles from "./AddListCurrency.module.scss";

function AddListCurrency(props: IListCurrencies) {
  const { listCurrencies, setListCurrencies } = props;
  const { currenciesAllNames } = useContext(CONTEXT);

  function addToList(nameCurrency: string) {
    saveCurrencyToList(listCurrencies, setListCurrencies, nameCurrency);
  }

  return (
    <List className={styles.list__name}>
      {Object.keys(currenciesAllNames).map((item) => (
        <ListItem key={item}>
          {!listCurrencies.some((currency) => currency.shortName === item) && (
            <ListItemText
              className={styles.name__currency}
              primary={`${item}: ${currenciesAllNames[item]}`}
              onClick={() => addToList(item)}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
}

export default AddListCurrency;
