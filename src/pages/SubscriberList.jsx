import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Box, Fab, Stack, Zoom } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubscriberItem from "../components/subscriber/SubscriberItem";
import { api } from "../configs/axiosConfigs";

const SubscriberList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  function getData() {
    api.get("subscriber").then((res) => {
      setData(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
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
        {data.map((subscriber, index) => {
          return (
            <SubscriberItem
              key={subscriber.id}
              item={subscriber}
              index={index + 1}
              getListData={getData}
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
          onClick={() => {
            navigate("/add-subscriber");
          }}
          sx={classes.fab}
          aria-label="test"
        >
          {<PersonAddAltIcon fontSize="large" />}
        </Fab>
      </Zoom>
    </Stack>
  );
};

export default SubscriberList;
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
