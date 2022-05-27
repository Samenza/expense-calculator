import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AlertNotification from "../AlertNotification";
import { api } from "../../configs/axiosConfigs";

const AddExpenseItem = () => {
  const [alert, setAlert] = useState({ show: false });
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    payerId: "",
  });
  const [payerOptions, setPayersOptions] = useState();
  const [error, setError] = useState({
    title: true,
    price: true,
    payerId: true,
  });

  function getPayerOption() {
    api.get("subscriber").then((res) => setPayersOptions(res.data));
  }
  function formOnChange(value, name) {
    setFormData((prev) => {
      return { ...prev, [name]: value.target.value };
    });
  }

  function postFormData(formData) {
    api.post("expense", formData).then((res) => {
      setAlert({ show: true });
      setFormData({ title: "", price: "", payerId: "" });
    });
  }
  function validation(onSuccess) {
    let formDataValidation = false;

    formDataValidation = Object.keys(formData).reduce(
      (acc, cur) => {
        acc[cur] = Boolean(formData[cur]);
        return acc;
      },
      { title: false, price: false, payerId: false }
    );
    const isFormValid = Object.values(formDataValidation).every(Boolean);

    if (isFormValid) {
      onSuccess(formData);
      setError({ title: true, price: true, payerId: true });
    } else {
      setError(formDataValidation);
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
          gap: "1rem",
          border: "1px solid #77D8BE",
          padding: "7vh 1rem",
          borderRadius: "10px",
          backgroundColor: "#f6fffd",
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
            mb: "1rem",
          }}
        >
          {" "}
          افزودن هزینه جدید{" "}
        </Typography>
        <TextField
          onChange={(e) => {
            formOnChange(e, "title");
            if (e.target.value) {
              setError((prev) => {
                return { ...prev, title: true };
              });
            }
          }}
          sx={{ width: "90%" }}
          label="عنوان"
          variant="outlined"
          value={formData.title}
          error={!error.title}
          helperText={!error.title ? "عنوان را وارد کنید" : " "}
        />
        <TextField
          onChange={(e) => {
            formOnChange(e, "price");
            if (e.target.value) {
              setError((prev) => {
                return { ...prev, price: true };
              });
            }
          }}
          sx={{ width: "90%" }}
          label="هزینه"
          variant="outlined"
          value={formData.price}
          error={!error.price}
          helperText={!error.price ? "هزینه را وارد کنید" : " "}
        />
        <FormControl sx={{ width: "90%" }}>
          <InputLabel
            sx={{ color: !error.payerId && "#e63946" }}
            id="demo-multiple-checkbox-label"
          >
            پرداخت کننده
          </InputLabel>
          <Select
            error={!error.payerId}
            onFocus={() => getPayerOption()}
            value={formData.payerId}
            labelId="demo-multiple-checkbox-label"
            label="پرداخت کننده"
            onChange={(e) => {
              formOnChange(e, "payerId");
              if (e.target.value) {
                setError((prev) => {
                  return { ...prev, payerId: true };
                });
              }
            }}
          >
            {payerOptions?.map((payer) => {
              return (
                <MenuItem key={payer.id} value={payer.id}>
                  {payer.name}
                </MenuItem>
              );
            })}{" "}
          </Select>{" "}
          <FormHelperText sx={{ color: !error.payerId && "#e63946" }}>
            {!error.price ? "پرداخت کننده را انتخاب کنید" : " "}
          </FormHelperText>
        </FormControl>
        <Button
          sx={{ width: "90%", padding: "14px" }}
          color="primary"
          variant="contained"
          onClick={() => validation(postFormData)}
        >
          افزودن +
        </Button>
      </Stack>
      <AlertNotification status={alert} setStatus={setAlert} />
    </Stack>
  );
};

export default AddExpenseItem;
