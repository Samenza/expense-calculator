import React from "react";
import { Snackbar, Alert } from "@mui/material";

const AlertNotification = ({ status, setStatus }) => {
  console.log(`status`, status);
  return (
    <Snackbar
      open={status.show}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={() => setStatus({ show: false })}
      autoHideDuration={2000}
      message="Archived"
    >
      <Alert sx={{ minWidth: "40%" }} variant="outlined" severity="success">
        با موفقیت اضافه شد!
      </Alert>
    </Snackbar>
  );
};

export default AlertNotification;
