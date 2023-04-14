import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { NavLink } from "react-router-dom";
import "../styles/sideMenu.css";
import { rgbToHex } from "@mui/material";

export default function SideMenu() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        boxShadow: 0,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="links">
        <ListItem key={"close"} disablePadding>
          <ListItemButton>
            <CloseOutlinedIcon />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Index"} disablePadding>
          <ListItemButton component={NavLink} to="/">
            Index
          </ListItemButton>
        </ListItem>
        <ListItem key={"About"} disablePadding>
          <ListItemButton component={NavLink} to="/about">
            About
          </ListItemButton>
        </ListItem>
        <ListItem key={"Projects"} disablePadding>
          <ListItemButton component={NavLink} to="/projects">
            Projects
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon id="openBtn" />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            BackdropProps={{
              style: { backgroundColor: "#D2D2D2", opacity: 0.75 },
            }}
            sx={{ boxShadow: 0 }}
            children={{ style: { boxShadow: 0 } }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
