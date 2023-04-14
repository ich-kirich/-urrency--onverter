import { List, ListItem, ListItemText } from "@mui/material";
import { useContext } from "react";
import { IListCurrencies } from "../../types/types";
import { saveCurrencyToList } from "../../libs/currency";
import { CONTEXT } from "../../libs/constants";
import styles from "./AddListCurrency.module.scss";

function AddListCurrency(props: IListCurrencies) {
  const { listCurrencies, setListCurrency } = props;
  const { currenciesAllNames } = useContext(CONTEXT);
  const listSetCurrencies = new Set(
    listCurrencies.map((item) => item.shortName),
  );
  const currenciesNames = Object.keys(currenciesAllNames).filter(
    (item) => !listSetCurrencies.has(item),
  );

  function addToList(nameCurrency: string) {
    saveCurrencyToList(listCurrencies, setListCurrency, nameCurrency);
  }

  return (
    <List className={styles.list__name}>
      {currenciesNames.map((item) => (
        <ListItem key={item}>
          <ListItemText
            className={styles.name__currency}
            primary={`${item}: ${currenciesAllNames[item]}`}
            onClick={() => addToList(item)}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default AddListCurrency;
