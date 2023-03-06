import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.scss";
import LinksMenu from "../LinkMenu/LinksMenu";

function Header() {
  const [popupOpen, setPopupOpen] = useState(false);
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const drawerPopup = () => (
    <Box maxWidth="sm" className={styles.popup__wrapper}>
      <LinksMenu />
    </Box>
  );

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
          {isMobileScreen ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={togglePopup}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={popupOpen} onClose={togglePopup}>
                {drawerPopup()}
              </Drawer>
            </>
          ) : (
            <Box maxWidth="sm" className={styles.navigation__wrapper}>
              <LinksMenu />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
