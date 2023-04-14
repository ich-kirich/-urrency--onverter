import { TextField } from "@mui/material";
import { useState } from "react";
import { ICurrencyState, IMoney } from "../../types/types";
import SelectCurrencyList from "../SelectCurrencyList/SelectCurrencyList";
import styles from "./BaseMoneyField.module.scss";

function BaseMoneyField(props: ICurrencyState & IMoney) {
  const { setMoney, currencyValue, setCurrencyValue, amount } = props;
  const [value, setValue] = useState(amount);
  return (
    <>
      <SelectCurrencyList
        chooseCurrency={currencyValue!.shortName}
        currencyValue={currencyValue}
        setCurrencyValue={setCurrencyValue}
      />
      <TextField
        id="currecny"
        label="Enter a number"
        variant="filled"
        size="medium"
        type="number"
        value={value}
        fullWidth
        onChange={(e) =>
          Number(e.target.value) >= 0 && setValue(e.target.value)
        }
        onKeyUp={() => setMoney(value)}
        className={styles.currency__input}
      />
    </>
  );
}

export default BaseMoneyField;
