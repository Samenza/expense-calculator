import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavigationBar from "../components/BottomNavigationBar";
import AlertNotification from "./../components/AlertNotification";

const Home = () => {
  return (
    <Container
      maxWidth={"sm"}
      disableGutters={true}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000000ab",
      }}
    >
      <Box sx={{ height: window.innerHeight - 80, position: "relative" }}>
        <Outlet />
      </Box>
      <Box sx={{ position: "relative" }}>
        <BottomNavigationBar />
      </Box>
      <AlertNotification />
    </Container>
  );
};

export default Home;
