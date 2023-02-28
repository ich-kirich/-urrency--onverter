import { NativeSelect } from "@mui/material";
import AllCurrencies from "../../types/types";
import styles from "./SelectCurrencyList.module.scss";

function SelectCurrencyList(props: {
  currencies: AllCurrencies;
  chooseCurrency: string;
  setChooseCurrency: Function;
}) {
  const { currencies } = props;
  const { chooseCurrency } = props;
  const { setChooseCurrency } = props;
  return (
    <NativeSelect
      value={chooseCurrency}
      className={styles.selectCurrency}
      onChange={(e) => setChooseCurrency(e.target.value)}
    >
      {Object.keys(currencies).map((elem) => (
        <option key={elem} value={elem}>
          {elem}
        </option>
      ))}
    </NativeSelect>
  );
}

export default SelectCurrencyList;
