import React from "react";
import { Alert, AlertTitle } from "@mui/material";

const ErrorMessage = ({ severity = "info", children }) => {
  return (
    <Alert severity={severity} sx={{ fontSize: 20 }}>
      <AlertTitle>
        <strong>{children}</strong>
      </AlertTitle>
    </Alert>
  );
};

export default ErrorMessage;
