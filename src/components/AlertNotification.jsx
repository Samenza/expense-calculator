import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useNotificationContext } from "../context/NotificationContextProvider";

const AlertNotification = () => {
  const { notification, setNotification } = useNotificationContext();

  return (
    <Snackbar
      open={notification.show}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={() =>
        setNotification((prev) => {
          return { ...prev, show: false };
        })
      }
      autoHideDuration={2000}
      message="Archived"
    >
      <Alert
        sx={{ minWidth: "40%" }}
        variant="outlined"
        severity={notification.severity}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertNotification;
