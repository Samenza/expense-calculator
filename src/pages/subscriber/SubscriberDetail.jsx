import { useTheme } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExpenseListItems from "../../components/expense/ExpenseListItems";
import { api } from "../../configs/axiosConfigs";

const SubscriberDetail = () => {
  const { id } = useParams();
  const [listData, setListData] = useState([]);
  const theme = useTheme();
  function getSubscriberDetailList() {
    api.get(`expense/subscriber/${id}`).then((res) => {
      setListData(res.data);
    });
  }
  useEffect(() => {
    getSubscriberDetailList();
  }, []);
  return (
    <Stack
      sx={{
        maxWidth: "100%",
        margin: "auto",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "80%",
          mt: "2rem",
          padding: "2rem",
          borderRadius: "10px",
          backgroundColor: theme.palette.secondary.main,
          textAlign: "center",
        }}
      >
        <Typography
          sx={(theme) => ({ color: theme.palette.darkBlue.main })}
          variant="h5"
        >
          {listData[0]?.payer?.name}
        </Typography>
      </Box>
      <Stack
        sx={{
          height: "100%",
          overflowY: "auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            height: "7vh",
            my: "1rem",
            width: "89%",
            alignSelf: "center",
          }}
        >
          <Button variant="contained"> حذف همه ی هزینه ها</Button>
        </Box>
        <Stack
          sx={{
            alignItems: "center",
            gap: "0.75rem",
            height: "77%",
            overflowY: "auto",
          }}
        >
          {listData.map((item) => {
            return <ExpenseListItems key={item.id} item={item} />;
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SubscriberDetail;
