import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Grid,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import Loading from "../../components/Loading";
// import ErrorMessage from "../../components/ErrorMessage";
// import MainScreen from "../../components/MainScreen";
import { login } from "../../redux/actions/userAction";
function LoginScreen({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography component="h1" variant="h5">
        Logged
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      {loading && <CircularProgress />}
      <form
        onSubmit={submitHandler}
        style={{ width: "100%", maxWidth: "400px", marginTop: "8px" }}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </form>
      <Grid container sx={{ mt: 2 }}>
        <Grid item>
          <Link href="/register" variant="body2">
            New Customer? Register Here
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginScreen;
