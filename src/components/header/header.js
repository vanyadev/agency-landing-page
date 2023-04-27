import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo_desk from "./../../assets/img/logo_desk.svg";
import logo_mob from "./../../assets/img/logo_mob.svg";
import burger_menu from "./../../assets/img/burger_menu.svg";

import { styles } from "./styles";
import Drawer from "../drawer";
import Navbar from "../navbar";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl" sx={styles.container}>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        <Toolbar disableGutters>
          <Typography component="a" href="/" sx={styles.logoDesk}>
            <img src={logo_desk} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={() => setIsDrawerOpen(true)}
            >
              <img alt="burger menu" src={burger_menu} />
            </IconButton>
          </Box>
          <Typography component="a" href="/" sx={styles.logoMob}>
            <img src={logo_mob} alt="logo" />
          </Typography>
        
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            <Navbar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
