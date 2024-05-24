import React from "react";
import { CircularProgress, Box } from "@mui/material";

function Loading({ size = 100 }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <CircularProgress sx={{ width: size, height: size }} size={size} />
    </Box>
  );
}

export default Loading;
