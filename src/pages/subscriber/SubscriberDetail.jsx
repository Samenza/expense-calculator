import { useTheme } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExpenseListItems from "../../components/expense/ExpenseListItems";
import { api } from "./../../configs/axiosConfigs";
import ConfirmationModal from "./../../components/ConfirmationModal";

const SubscriberDetail = () => {
  const { id } = useParams();
  const [listData, setListData] = useState([]);
  const [subscriber, setSubscriber] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const theme = useTheme();

  function getSubscriberDetailList() {
    api.get(`expense/subscriber/${id}`).then((res) => {
      setListData(res.data);
    });
  }

  function getSubscriber() {
    api
      .get(`subscriber/${id}`)
      .then((res) => setSubscriber(res.data), getSubscriberDetailList());
  }

  useEffect(() => {
    getSubscriberDetailList();
    getSubscriber();
  }, []);

  function deleteAll() {
    api.delete(`expense/delete-all-subscriber-expenses/${id}`);
  }

  return (
    <>
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
            {subscriber?.name}
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
            <Button
              disabled={!listData?.length}
              onClick={() => setOpenModal(true)}
              variant="contained"
            >
              حذف همه ی هزینه ها
            </Button>
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
      <ConfirmationModal
        open={openModal}
        setOpen={setOpenModal}
        agree={deleteAll}
        title=" همه ی هزینه ها حذف شود؟"
      />
    </>
  );
};

export default SubscriberDetail;
