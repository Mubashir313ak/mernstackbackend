import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Iconify from "./iconify/iconify";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userAction";
import { Menu, MenuItem } from "@mui/material";

const Navbar = ({ setSearch }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch(); // Corrected line

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    window.location.href = "/login";
  };

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
              <Iconify
                onClick={handleMenu}
                icon="iconamoon:profile-fill"
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
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </Menu>
            </>
            <Button color="inherit" href="/login">
              Login
            </Button>{" "}
            <Button color="inherit" href="/register">
              Register
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
