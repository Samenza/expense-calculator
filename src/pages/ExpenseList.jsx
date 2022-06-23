import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Stack, Zoom } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseListItems from "../components/expense/ExpenseListItems";
import TotalExpense from "../components/expense/TotalExpense";
import { api } from "../configs/axiosConfigs";
import useLoading from "../hooks/useLoading";
import ExpenseListFilter from "./../components/expense/ExpenseListFilter";
import Flex from "./../components/Flex";
const ExpenseList = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState([]);
  const { setLoading, closeLoadingByTimer, loading, loadingIcon } =
    useLoading();
  function getListData(params = { dateFilter: "current_month" }) {
    setLoading(true);
    api
      .get("expense", { params: params })
      .then((res) => {
        res.data.forEach((item) => {
          item.persianDate = new Intl.DateTimeFormat("fa-IR").format(
            new Date(item.createdAt)
          );
        });

        setListData(res.data);
      })
      .finally(() => {
        closeLoadingByTimer();
      });
  }
  useEffect(() => {
    getListData();
  }, []);
  return (
    <>
      <Stack sx={{ height: "100%", overflowY: "auto" }}>
        <Flex
          sx={{
            height: "10vh",
            alignItems: "Center",
            justifyContent: "center",
          }}
        >
          <ExpenseListFilter getListData={getListData} />
        </Flex>
        <Stack
          sx={{
            alignItems: "center",
            gap: "0.75rem",
            height: "75%",
            overflowY: "auto",
          }}
        >
          {!loading
            ? listData.map((item) => {
                return (
                  <ExpenseListItems
                    key={item.id}
                    item={item}
                    getListData={getListData}
                  />
                );
              })
            : loadingIcon}
        </Stack>
        <TotalExpense />
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
