import { List, ListItem, ListItemText } from "@mui/material";
import { useContext } from "react";
import { IListCurrencies } from "../../types/types";
import { Context, saveCurrencyToList } from "../../utils/utils";
import styles from "./AddListCurrency.module.scss";

function AddListCurrency(props: IListCurrencies) {
  const { listCurrencies, setListCurrencies } = props;
  const { currenciesAllNames } = useContext(Context);

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
