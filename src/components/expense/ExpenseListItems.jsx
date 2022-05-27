import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ExpenseListItems = ({ name, title, price }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        width: "85%",
        height: "4.5rem",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#e7f8ff",
        padding: " 0 10px",
      }}
    >
      <Stack sx={{ gap: "0.5rem", padding: "10px", width: "100%" }}>
        <Typography variant="body1">{title} </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              backgroundColor: "#3ca69a",
              padding: "2px 8px",
              borderRadius: "5px",
              color: "#e0f6fa",
            }}
            variant="subtitle2"
          >
            {name}
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#F06292",
              padding: "2px 8px",
              borderRadius: "5px",
              color: "#e0f6fa",
            }}
            variant="body1"
          >
            {price}{" "}
            <Typography component={"span"} sx={{ fontSize: "xx-small" }}>
              تومان
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default ExpenseListItems;
