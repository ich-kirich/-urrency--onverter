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
    <AppBar className={styles.topBar}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component="h1"
            className={styles.topBar__logo}
          >
            Currency converter
          </Typography>
          <Box maxWidth="sm" className={styles.navigation__wrapper}>
            <Link
              href="#123"
              variant="body1"
              className={styles.navigation__btns}
            >
              Exchange rates
            </Link>
            <Link
              href="#123"
              variant="body1"
              className={styles.navigation__btns}
            >
              Convert Currency
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
