import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Stack } from "@mui/material";
import React from "react";
import ExpenseListItems from "./ExpenseListItems";
import { useNavigate } from "react-router-dom";

const ExpenseList = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack sx={{ height: "100%", overflowY: "scroll" }}>
        <Box sx={{ height: "10vh" }}></Box>
        <Stack sx={{ alignItems: "center", gap: "1rem" }}>
          <ExpenseListItems
            name=" حسین کونیه"
            title="توانا بود هرکه دانا بود ز کصکشی دل کیر برنا شود"
            price="12.000"
          />
          <ExpenseListItems name="سعید" title="کباب کوبیده" price="23.000" />
        </Stack>
      </Stack>
      <Fab
        sx={classes.fab}
        aria-label="test"
        onClick={() => {
          navigate("/add-item");
        }}
      >
        {<AddIcon fontSize="large" />}
      </Fab>
    </>
  );
};

export default ExpenseList;
const classes = {
  fab: {
    position: "absolute",
    bottom: 30,
    left: 30,
    width: "4rem",
    height: "4rem",
    color: "#E0F7FA",
    backgroundColor: "#26A69A",
  },
};
