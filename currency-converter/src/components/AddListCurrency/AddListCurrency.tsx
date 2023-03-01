import { List, ListItem, ListItemText } from "@mui/material";
import { AllCurrencies, ICurrency } from "../../types/types";
import { saveCurrencyToList } from "../../utils/utils";
import styles from "./AddListCurrency.module.scss";

function AddListCurrency(props: {
  currencies: AllCurrencies;
  listCurrencies: ICurrency[];
  setListCurrencies: Function;
}) {
  const { currencies, listCurrencies, setListCurrencies } = props;
  function addToList(elem: string) {
    saveCurrencyToList(listCurrencies, setListCurrencies, elem);
  }
  return (
    <List sx={{ maxHeight: 200, overflow: "auto" }}>
      {Object.keys(currencies).map((elem) => (
        <ListItem key={elem}>
          {!listCurrencies.some((currency) => currency.shortName === elem) && (
            <ListItemText
              className={styles.nameCurrency}
              primary={`${elem}: ${currencies[elem]}`}
              onClick={() => addToList(elem)}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
}

export default AddListCurrency;
