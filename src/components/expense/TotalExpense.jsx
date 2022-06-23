import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import Flex from "./../Flex";
import { api } from "./../../configs/axiosConfigs";
import { Box } from "@mui/system";
import { useExpenseListContext } from "../../context/ExpenseListContextProvider";
import useLoading from "./../../hooks/useLoading";

const TotalExpense = () => {
  const [totalExpense, setTotalExpense] = useState();
  const { listFilter } = useExpenseListContext();
  const { setLoading, closeLoadingByTimer, loading, rollLoading } =
    useLoading();
  const getTotalExpense = () => {
    setLoading(true);
    api
      .get(`calculator/total`, { params: { dateFilter: listFilter } })
      .then((res) => {
        setTotalExpense(res.data?.total);
      })
      .finally(() => {
        closeLoadingByTimer();
      });
  };
  useEffect(() => {
    getTotalExpense();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listFilter]);
  return (
    <Flex
      sx={{
        height: "10vh",
        alignItems: "Center",
        justifyContent: "flex-end",
        width: "88%",
        margin: "Auto",
      }}
    >
      <Paper
        sx={(theme) => ({
          backgroundColor: theme.palette.greenLight.main,
          color: theme.palette.greenLight.contrastText,
          padding: "0.2rem",
          width: "50%",
          minWidth: "200px",
          justifySelf: "flex-end",
        })}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6">مجموع هزینه ها (ریال) :</Typography>
          <Typography variant="h6">
            {!loading
              ? new Intl.NumberFormat().format(totalExpense)
              : rollLoading}
          </Typography>
        </Box>
      </Paper>
    </Flex>
  );
};

export default TotalExpense;
