import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PostAddIcon from "@mui/icons-material/PostAdd";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BottomNavigationBar() {
  const [value, setValue] = useState("expense");
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        height: "5rem",
        backgroundColor: "#80DEEA",
        borderRadius: "15px  15px 0 0",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="لیست کاربران"
        value="users"
        icon={<AssignmentIndIcon fontSize="large" />}
        onClick={() => navigate("/users")}
      />
      <BottomNavigationAction
        label="هزینه ها"
        value="expense"
        icon={<PostAddIcon fontSize="large" />}
        onClick={() => navigate("/expense-list")}
      />
      <BottomNavigationAction
        disabled
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon fontSize="large" />}
      />
    </BottomNavigation>
  );
}
