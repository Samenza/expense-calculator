import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ExpenseListItems from "../../components/expense/ExpenseListItems";
import { api } from "../../configs/axiosConfigs";
import { useParams } from "react-router-dom";

const SubscriberDetail = () => {
  const { id } = useParams();
  const [listData, setListData] = useState([]);
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
          backgroundColor: "#80DEEA",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">{listData[0]?.payer?.name}</Typography>
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
            return (
              <ExpenseListItems
                key={item.id}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SubscriberDetail;
