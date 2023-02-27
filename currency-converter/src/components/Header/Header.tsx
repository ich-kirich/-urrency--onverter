import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import styles from "./Header.module.scss";

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="h1" className={styles.logo}>
          Currency converter
        </Typography>
        <Box maxWidth="sm" className={styles.wrapperNavBtns}>
          <Link href="#123" variant="body1" className={styles.navBtns}>
            Convert Currency
          </Link>
          <Link href="#123" variant="body1" className={styles.navBtns}>
            Exchange rates
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
