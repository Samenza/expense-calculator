import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Fab } from "@mui/material";
import React from "react";
const Users = () => {
  return (
    <Fab
      sx={{
        position: "absolute",
        bottom: 30,
        left: 30,
        width: "4rem",
        height: "4rem",
        color: "#E0F7FA",
        backgroundColor: "#26A69A",
      }}
      aria-label="test"
    >
      {<PersonAddAltIcon fontSize="large" />}
    </Fab>
  );
};

export default Users;
