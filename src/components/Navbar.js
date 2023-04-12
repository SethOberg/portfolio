import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircleIcon from "@mui/icons-material/Circle";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BorderBottom } from "@mui/icons-material";
import SideMenu from "./SideMenu";

function printSomething() {
  console.log("Button clicked!!!");
}

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "white",
          color: "#333",
          borderBottom: 1,
          borderColor: "#A9A9A9",
          boxShadow: 0,
        }}
      >
        <Toolbar>
          <CircleIcon sx={{ mr: 2, color: "#E17A00" }} fontSize="large" />
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            PORTFOLIO
          </Typography>

          {/* <IconButton
            onClick={() => printSomething()}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <SideMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
