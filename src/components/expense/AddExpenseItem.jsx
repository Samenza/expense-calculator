import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AlertNotification from "../AlertNotification";

const AddExpenseItem = () => {
  const [alert, setAlert] = useState({ show: false });
  return (
    <Stack
      sx={{
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10vh",
      }}
    >
      <Stack
        sx={{
          width: "80%",
          alignItems: "center",
          gap: "2rem",
          border: "1px solid #77D8BE",
          padding: "7vh 1rem",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            width: "90%",
            backgroundColor: "#C7FCEC",
            padding: "14px 13px",
            boxSizing: "border-box",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          {" "}
          افزودن مورد جدید:
        </Typography>
        <TextField sx={{ width: "90%" }} label="عنوان" variant="outlined" />
        <TextField sx={{ width: "90%" }} label="قیمت" variant="outlined" />
        <TextField
          sx={{ width: "90%" }}
          label="پرداخت کننده"
          variant="outlined"
        />
        <Button
          sx={{ width: "90%", padding: "14px", backgroundColor: "#108299" }}
          variant="contained"
          onClick={() => setAlert({ show: true })}
        >
          افزودن +
        </Button>
      </Stack>
      <AlertNotification status={alert} setStatus={setAlert} />
    </Stack>
  );
};

export default AddExpenseItem;
