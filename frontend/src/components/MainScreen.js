import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainback: {
    minHeight: "93vh",
    display: "flex",
    padding: "10px 0",
  },
  page: {
    width: "100%",
  },
  heading: {
    fontSize: "60px",
    fontFamily: "'Work Sans', sans-serif",
    padding: "5px 10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      display: "flex",
      justifyContent: "center",
    },
  },
}));

function MainScreen({ children, title }) {
  const classes = useStyles();

  return (
    <div className={classes.mainback}>
      <Container>
        <Grid container>
          <Grid item xs={12} className={classes.page}>
            {title && (
              <>
                <Typography variant="h1" className={classes.heading}>
                  {title}
                </Typography>
                <hr />
              </>
            )}
            {children}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MainScreen;
