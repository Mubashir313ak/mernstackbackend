// src/components/Hero.js
import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to MyApp
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Your solution for something awesome
      </Typography>
      <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
        Get Started
      </Button>
    </Box>
  );
};

export default Hero;
