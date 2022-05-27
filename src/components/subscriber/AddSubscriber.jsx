import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { api } from "../../configs/axiosConfigs";
import AlertNotification from "../AlertNotification";

const AddSubscriber = () => {
  const [alert, setAlert] = useState({ show: false });
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  function postSubscriber(value) {
    api.post("subscriber", { name: value }).then((res) => {
      setAlert({ show: true });
    });
  }
  function validation(onSuccess) {
    if (data) {
      onSuccess(data);
      setError(false);
    } else {
      setError(true);
    }
  }
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
          افزودن پرداخت کننده:
        </Typography>
        <TextField
          error={error}
          onChange={(e) => setData(e.target.value)}
          sx={{ width: "90%" }}
          label="نام"
          variant="outlined"
          helperText={error && "لطفا نام را وارد کنید!"}
        />

        <Button
          sx={{ width: "90%", padding: "14px", backgroundColor: "#108299" }}
          variant="contained"
          onClick={(e) => validation(postSubscriber)}
        >
          افزودن
        </Button>
      </Stack>
      <AlertNotification status={alert} setStatus={setAlert} />
    </Stack>
  );
};

export default AddSubscriber;
