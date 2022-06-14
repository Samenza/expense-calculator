import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { api } from "../../configs/axiosConfigs";
import { useNotificationContext } from "../../context/NotificationContextProvider";
import { useParams } from "react-router-dom";

const AddSubscriber = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const { setNotification } = useNotificationContext();

  function postSubscriber(value) {
    api.post("subscriber", { name: value }).then((res) => {
      setNotification({
        show: true,
      });
      setName("");
    });
  }
  function patchSubscriber(value) {
    api.put(`subscriber/${id}`, { name: value }).then((res) => {
      setNotification({
        show: true,
        message: "با موفقیت ویرایش شد!",
      });
    });
  }

  function validation(onSuccess) {
    if (name) {
      onSuccess(name);
      setError(false);
    } else {
      setError(true);
    }
  }

  function getSubscriber() {
    api.get(`subscriber/${id}`).then((res) => setName(res.data.name));
  }
  useEffect(() => {
    getSubscriber();
    setName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        bgcolor={"greenLight.main"}
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
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "90%" }}
          label="نام"
          variant="outlined"
          helperText={error && "لطفا نام را وارد کنید!"}
          value={name}
        />

        <Button
          sx={{ width: "90%", padding: "14px", backgroundColor: "#108299" }}
          variant="contained"
          onClick={(e) => validation(id ? patchSubscriber : postSubscriber)}
        >
          افزودن
        </Button>
      </Stack>
    </Stack>
  );
};

export default AddSubscriber;
