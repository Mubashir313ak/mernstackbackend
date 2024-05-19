import React from "react";
import { Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} style={{ textAlign: "center", padding: "16px 0" }}>
            <Typography variant="body1" component="p">
              Copyright &copy; Note Zipper
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
