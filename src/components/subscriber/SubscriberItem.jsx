import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { api } from "../../configs/axiosConfigs";
import { useNavigate } from "react-router-dom";
const SubscriberItem = ({ item: { id, name }, index, getListData }) => {
  const navigate = useNavigate();
  function deleteItem() {
    api.delete(`subscriber/${id}`).then(() => {
      getListData();
    });
  }
  return (
    <Paper
      sx={{
        display: "flex",
        width: "85%",
        minHeight: "4.5rem",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#e7f8ff",
        padding: " 0 10px",
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
          sx={{
            backgroundColor: "#264653",
            borderRadius: "5px",
            color: "#e0f6fa",
            textAlign: "center",
            width: "24px",
            padding: "4px",
          }}
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
          >
            <ModeEditOutlineIcon />
          </IconButton>
          <IconButton
            onClick={() => deleteItem()}
            sx={{ color: "#f1faee", backgroundColor: "#e63946" }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default SubscriberItem;
