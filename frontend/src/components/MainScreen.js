import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

function MainScreen({ children, title }) {
  return (
    <Box sx={{ minHeight: "93vh", display: "flex", padding: "10px 0" }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sx={{ width: "100%" }}>
            {title && (
              <>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "30px", sm: "60px" },
                    fontFamily: "'Work Sans', sans-serif",
                    padding: "5px 10px",
                    display: { xs: "flex", sm: "block" },
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  {title}
                </Typography>
                <hr />
              </>
            )}
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MainScreen;
