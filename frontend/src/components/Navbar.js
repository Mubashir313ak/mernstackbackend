import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
// import { IconButton } from "@mui/material";
import Iconify from "./iconify/iconify";
const Navbar = ({ userInfo, setSearch, logoutHandler }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" href="/">
              Note Zipper
            </Button>
          </Typography>

          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            onChange={(e) => setSearch(e.target.value)}
            sx={{ marginRight: 2 }}
          />

          <div>
            <>
              <Button color="inherit" href="/mynote">
                My Notes
              </Button>
              {/* <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton> */}
              <Iconify
                onClick={handleMenu}
                icon="solar:bell-bing-bold-duotone"
                width={24}
              />
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component="a" href="/profile">
                  My Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    logoutHandler();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>

            <Button color="inherit" href="/login">
              Login
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
