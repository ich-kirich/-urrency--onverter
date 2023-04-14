import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Box } from "@mui/material";
import { MouseEvent } from "react";
import { IAddNewCurrencyProps } from "../../types/types";
import styles from "./AddNewCurrency.module.scss";

function AddNewCurrency(props: IAddNewCurrencyProps) {
  const { setVisible } = props;

  const viewAddListCurrencies = (e: MouseEvent) => {
    e.stopPropagation();
    setVisible(true);
  };

  return (
    <Box className={styles.add__wrapper}>
      <Box className={styles.add__currency} onClick={viewAddListCurrencies}>
        <ControlPointIcon />
        Add Currency
      </Box>
    </Box>
  );
}

export default AddNewCurrency;
