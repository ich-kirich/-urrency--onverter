import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Box } from "@mui/material";
import styles from "./AddNewCurrency.module.scss";

function AddNewCurrency(props: { setVisible: Function }) {
  const { setVisible } = props;
  return (
    <Box className={styles.add__wrapper}>
      <Box
        className={styles.add__currency}
        onClick={(e) => {
          e.stopPropagation();
          setVisible(true);
        }}
      >
        <ControlPointIcon />
        Add Currency
      </Box>
    </Box>
  );
}

export default AddNewCurrency;
