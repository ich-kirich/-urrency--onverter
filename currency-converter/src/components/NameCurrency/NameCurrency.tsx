import { Typography } from "@mui/material";
import styles from "./NameCurrency.module.scss";

function NameCurrency(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <Typography variant="h6" component="h1" className={styles.text}>
      {children}
    </Typography>
  );
}

export default NameCurrency;
