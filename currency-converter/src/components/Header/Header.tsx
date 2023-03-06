import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
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
            <Link to="/" className={styles.navigation__btns}>
              Exchange rates
            </Link>
            <Link to="/convert" className={styles.navigation__btns}>
              Convert Currency
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
