import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { api } from "../../configs/axiosConfigs";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "./../ConfirmationModal";
import { useNotificationContext } from "../../context/NotificationContextProvider";
const SubscriberItem = ({ item: { id, name }, index, getListData }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { setNotification } = useNotificationContext();
  function deleteItem() {
    api.delete(`subscriber/${id}`).then(() => {
      getListData();
      setNotification({
        show: true,
        message: "با موفقیت حذف شد!",
        severity: "success",
      });
    });
  }
  function deleteSubscriber() {
    deleteItem();
  }
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          width: "85%",
          minHeight: "4.5rem",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#e7f8ff",
          padding: " 0 10px ",
        }}
        onClick={() => {
          navigate(`${id}`);
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
          }}
        >
          {" "}
          <Typography
            sx={(theme) => ({
              backgroundColor: theme.palette.lightBlue.main,
              borderRadius: "5px",
              color: "#e0f6fa",
              textAlign: "center",
              width: "24px",
              padding: "4px",
            })}
            variant="h6"
          >
            {" "}
            {index}
          </Typography>{" "}
          <Box
            sx={{ display: "flex", justifyContent: "flex-start", width: "40%" }}
          >
            <Typography noWrap variant="h6">
              {name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <IconButton
              sx={{
                backgroundColor: "#006d77",
                color: "#f1faee",
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <ModeEditOutlineIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                setOpenModal(true);
              }}
              sx={(theme) => ({
                color: "#f1faee",
                backgroundColor: theme.palette.error.main,
              })}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
      <ConfirmationModal
        open={openModal}
        setOpen={setOpenModal}
        agree={deleteSubscriber}
        title=" این پرداخت کننده حذف شود؟"
      />
    </>
  );
};

export default SubscriberItem;
