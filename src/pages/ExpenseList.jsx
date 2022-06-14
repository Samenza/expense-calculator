import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Stack, Zoom } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseListItems from "../components/expense/ExpenseListItems";
import { api } from "../configs/axiosConfigs";

const ExpenseList = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  function getListData() {
    api.get("expense").then((res) => {
      setListData(res.data);
    });
  }
  useEffect(() => {
    getListData();
  }, []);
  return (
    <>
      <Stack sx={{ height: "100%", overflowY: "auto" }}>
        <Box sx={{ height: "10vh" }}></Box>
        <Stack
          sx={{
            alignItems: "center",
            gap: "0.75rem",
            height: "75%",
            overflowY: "auto",
          }}
        >
          {listData.map((item) => {
            return (
              <ExpenseListItems
                key={item.id}
                item={item}
                getListData={getListData}
              />
            );
          })}
        </Stack>
        <Zoom
          in={true}
          timeout={{ enter: 200, exit: 200 }}
          style={{
            transitionDelay: `100ms`,
          }}
          unmountOnExit
        >
          <Fab
            sx={classes.fab}
            aria-label="test"
            onClick={() => {
              navigate("/add-item");
            }}
          >
            {<AddIcon fontSize="large" />}
          </Fab>
        </Zoom>{" "}
      </Stack>
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
    backgroundColor: "#4f9480",
  },
};
