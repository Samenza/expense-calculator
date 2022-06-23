import { Button } from "@mui/material";
import React, { useState } from "react";
import { useExpenseListContext } from "../../context/ExpenseListContextProvider";
import Flex from "../Flex";
const btn = [
  { name: " ماه گذشته", value: "last_month" },
  {
    name: `ماه جاری (${new Date().toLocaleDateString("fa-IR", {
      month: "long",
    })})`,
    value: "current_month",
  },
  { name: "همه", value: "all" },
];

const ExpenseListFilter = ({ getListData }) => {
  const [isActive, setIsActive] = useState("current_month");
  const { setListFilter } = useExpenseListContext();
  return (
    <Flex
      sx={{
        button: {
          flex: "1 1",
        },
        width: "100%",
        padding: "0 2.185rem",
        gap: "0.5rem",
      }}
    >
      {btn.map((button) => {
        return (
          <Button
            key={button.name}
            onClick={(e) => {
              setIsActive(button.value);
              getListData({ dateFilter: button.value });
              setListFilter(button.value);
            }}
            variant="contained"
            color={isActive === button.value ? "greenLight" : "primary"}
          >
            {button.name}
          </Button>
        );
      })}
    </Flex>
  );
};

export default ExpenseListFilter;
